// Copyright 2013 SAP AG.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http: //www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.
'use strict';

var common = require('../common');
var PartKind = common.PartKind;

var Binary = require('./Binary');
var Default = require('./Default');
var Fields = require('./Fields');
var Int32 = require('./Int32');
var MultilineOptions = require('./MultilineOptions');
var Options = require('./Options');
var ParameterMetadata = require('./ParameterMetadata');
var Parameters = require('./Parameters');
var ReadLobReply = require('./ReadLobReply');
var ReadLobRequest = require('./ReadLobRequest');
var ResultSetMetadata = require('./ResultSetMetadata');
var SqlError = require('./SqlError');
var Text = require('./Text');
var Text20 = require('./Text20');

var rw = module.exports = {};
rw[PartKind.AUTHENTICATION] = Fields;
rw[PartKind.COMMAND] = Text;
rw[PartKind.CLIENT_ID] = Text20;
rw[PartKind.CONNECT_OPTIONS] = Options;
rw[PartKind.COMMIT_OPTIONS] = Options;
rw[PartKind.ERROR] = SqlError;
rw[PartKind.FETCH_OPTIONS] = Options;
rw[PartKind.FETCH_SIZE] = Int32;
rw[PartKind.TRANSACTION_ID] = Binary;
rw[PartKind.TOPOLOGY_INFORMATION] = MultilineOptions;
rw[PartKind.PARAMETERS] = Parameters;
rw[PartKind.PARAMETER_METADATA] = ParameterMetadata;
rw[PartKind.RESULT_SET_ID] = Binary;
rw[PartKind.RESULT_SET] = Default;
rw[PartKind.OUTPUT_PARAMETERS] = Default;
rw[PartKind.RESULT_SET_METADATA] = ResultSetMetadata;
rw[PartKind.ROWS_AFFECTED] = Int32;
rw[PartKind.READ_LOB_REQUEST] = ReadLobRequest;
rw[PartKind.READ_LOB_REPLY] = ReadLobReply;
rw[PartKind.SESSION_CONTEXT] = Options;
rw[PartKind.STATEMENT_CONTEXT] = Options;
rw[PartKind.STATEMENT_ID] = Binary;
rw[PartKind.PARTITION_INFORMATION] = Default;
rw[PartKind.TRANSACTION_FLAGS] = Options;
rw[PartKind.TABLE_NAME] = Text;

for (var name in PartKind) {
  var kind = PartKind[name];
  if (!rw[kind]) {
    rw[kind] = Default;
  }
}