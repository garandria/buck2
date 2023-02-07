/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::any::Any;
use std::fmt::Debug;
use std::fmt::Formatter;
use std::sync::Arc;

use allocative::Allocative;
use dupe::Dupe;

/// Type erased value associated for each Key in Dice
#[derive(Allocative, Clone, Dupe)]
pub(crate) struct DiceValue(Arc<dyn DiceValueDyn>);

impl Debug for DiceValue {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("DiceValue").finish_non_exhaustive()
    }
}

impl DiceValue {
    fn new<V: DiceValueDyn>(value: V) -> DiceValue {
        DiceValue(Arc::new(value))
    }

    pub(crate) fn downcast_ref<V: Any>(&self) -> Option<&V> {
        self.0.downcast_ref()
    }

    /// Dynamic version of `Key::equality`.
    pub(crate) fn equality(&self, other: &DiceValue) -> bool {
        self.0.equality(&*other.0)
    }
}

trait DiceValueDyn: Allocative + Any + Send + Sync + 'static {
    fn as_any(&self) -> &dyn Any;
    /// Panics if called with incompatible values.
    fn equality(&self, other: &dyn DiceValueDyn) -> bool;
    fn validity(&self) -> bool;
}

impl dyn DiceValueDyn {
    pub(crate) fn downcast_ref<V: Any>(&self) -> Option<&V> {
        self.as_any().downcast_ref()
    }
}