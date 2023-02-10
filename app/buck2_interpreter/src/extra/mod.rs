/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

pub mod buckconfig;
pub mod cell_info;
pub mod xcode;

use allocative::Allocative;
use dupe::Dupe;
pub use xcode::XcodeVersionInfo;

#[derive(Copy, Clone, Dupe, Debug, PartialEq, Allocative)]
pub enum InterpreterHostPlatform {
    Linux,
    MacOS,
    Windows,
}

#[derive(Copy, Clone, Dupe, Debug, PartialEq, Allocative)]
pub enum InterpreterHostArchitecture {
    AArch64,
    X86_64,
}
