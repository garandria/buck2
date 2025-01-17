/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::sync::Arc;

use crate::impls::core::graph::types::VersionedGraphKey;
use crate::impls::core::graph::types::VersionedGraphResult;
use crate::impls::core::versions::VersionTracker;
use crate::impls::ctx::SharedLiveTransactionCtx;
use crate::impls::key::DiceKey;
use crate::impls::transaction::ChangeType;
use crate::versions::VersionNumber;

/// Core state of DICE, holding the actual graph and version information
pub(super) struct CoreState {
    version_tracker: VersionTracker,
}

impl CoreState {
    pub(super) fn new() -> Self {
        Self {
            version_tracker: VersionTracker::new(),
        }
    }

    pub(super) fn update_state(
        &mut self,
        updates: impl IntoIterator<Item = (DiceKey, ChangeType)>,
    ) -> VersionNumber {
        let version_update = self.version_tracker.write();

        let mut changes_recorded = false;
        for (_key, _change) in updates {
            // TODO update the graph
            changes_recorded |= true;
        }
        if changes_recorded {
            version_update.commit()
        } else {
            version_update.undo()
        }
    }

    pub(super) fn ctx_at_version(&mut self, v: VersionNumber) -> Arc<SharedLiveTransactionCtx> {
        self.version_tracker.at(v)
    }

    pub(super) fn current_version(&self) -> VersionNumber {
        self.version_tracker.current()
    }

    pub(super) fn drop_ctx_at_version(&mut self, v: VersionNumber) {
        self.version_tracker.drop_at_version(v)
    }

    pub(super) fn lookup_key(&mut self, _key: VersionedGraphKey) -> VersionedGraphResult {
        // TODO(bobyf) fill in actual logic to check cache
        VersionedGraphResult::Compute
    }
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;

    use crate::impls::core::internals::CoreState;
    use crate::impls::key::DiceKey;
    use crate::impls::transaction::ChangeType;
    use crate::versions::VersionNumber;

    #[test]
    fn update_state_gets_next_version() {
        let mut core = CoreState::new();

        assert_eq!(
            core.update_state([(DiceKey { index: 0 }, ChangeType::Invalidate)]),
            VersionNumber::new(1)
        );

        assert_eq!(
            core.update_state([(DiceKey { index: 1 }, ChangeType::Invalidate)]),
            VersionNumber::new(2)
        );
    }

    #[test]
    fn state_ctx_at_version() {
        let mut core = CoreState::new();
        let v = VersionNumber::new(0);

        let ctx = core.ctx_at_version(v);
        assert_eq!(ctx.get_version(), v);

        let ctx1 = core.ctx_at_version(v);
        assert!(Arc::ptr_eq(&ctx, &ctx1));

        // if you drop one, there is still reference so getting the same version should give the
        // same instance of ctx
        core.drop_ctx_at_version(v);
        let ctx2 = core.ctx_at_version(v);
        assert!(Arc::ptr_eq(&ctx, &ctx2));

        // drop all references, should give a different ctx instance
        core.drop_ctx_at_version(v);
        core.drop_ctx_at_version(v);
        let another = core.ctx_at_version(v);
        assert!(!Arc::ptr_eq(&ctx, &another));
    }
}
