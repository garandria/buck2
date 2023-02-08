/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::collections::HashSet;
use std::sync::Arc;

use buck2_interpreter::global_interpreter_state::GlobalInterpreterState;
use maplit::hashset;
use once_cell::sync::Lazy;
use starlark::docs::Doc;
use starlark::docs::DocItem;
use starlark::docs::Member;
use starlark::docs::Object;

use crate::builtin_docs::docs::builtin_doc;

// List of BXL global function names.
// (@wendyy) I don't think this is a nice implementation, but this offers us finer
// grain control over documentation generated by globals. Let's at least get the
// documentation out there before coming up with a cleaner solution
static BXL_GLOBAL_METHOD_NAME_SET: Lazy<HashSet<&str>> = Lazy::new(|| {
    hashset![
        "sub_target",
        "configured_sub_target",
        "target_set",
        "get_path_without_materialization"
    ]
});

// Globals that are in BXL. For BXL, we will probably only have global functions (as opposed
// to objects and properties).
pub(crate) fn get_builtin_bxl_docs(
    interpreter_state: Arc<GlobalInterpreterState>,
) -> anyhow::Result<Vec<Doc>> {
    match interpreter_state.bxl_file_global_env.documentation() {
        DocItem::Object(b_o) => {
            let mut docs = vec![];
            for member in b_o.members {
                if BXL_GLOBAL_METHOD_NAME_SET.contains(member.0.as_str()) {
                    match member.1 {
                        Member::Function(function) => {
                            // Convert the function to its own object so it gets its own markdown file name.
                            // Otherwise, it will be named `native.md`, which is confusing in static docs.
                            let doc_item = DocItem::Object(Object {
                                docs: None,
                                members: vec![(member.0.clone(), Member::Function(function))],
                            });

                            docs.push(builtin_doc(member.0.as_str(), "bxl", doc_item));
                        }
                        _ => (),
                    }
                }
            }

            Ok(docs)
        }
        _ => Ok(Vec::new()),
    }
}
