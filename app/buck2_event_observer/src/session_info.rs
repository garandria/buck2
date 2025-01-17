/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use buck2_events::trace::TraceId;

/// Information about the current command, such as session or build ids.
#[derive(Default)]
pub struct SessionInfo {
    pub trace_id: Option<TraceId>,
    pub test_session: Option<buck2_data::TestSessionInfo>,
}
