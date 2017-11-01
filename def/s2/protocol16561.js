// Generated from protocol16561.py
exports.VERSION = 16561;

exports.TYPE_INFO = [["_int",[[0,7]]],["_int",[[0,4]]],["_int",[[0,6]]],["_int",[[0,14]]],["_int",[[0,22]]],["_int",[[0,32]]],["_choice",[[0,2],{"0":["m_uint6",2],"1":["m_uint14",3],"2":["m_uint22",4],"3":["m_uint32",5]}]],["_blob",[[0,8]]],["_int",[[0,8]]],["_struct",[[["m_flags",8,0],["m_major",8,1],["m_minor",8,2],["m_revision",8,3],["m_build",5,4],["m_baseBuild",5,5]]]],["_int",[[0,3]]],["_struct",[[["m_signature",7,0],["m_version",9,1],["m_type",10,2],["m_elapsedGameLoops",5,3]]]],["_fourcc",[]],["_blob",[[0,7]]],["_int",[[0,64]]],["_struct",[[["m_region",8,0],["m_programId",12,1],["m_realm",5,2],["m_name",13,3],["m_id",14,4]]]],["_struct",[[["m_a",8,0],["m_r",8,1],["m_g",8,2],["m_b",8,3]]]],["_int",[[0,2]]],["_struct",[[["m_name",7,0],["m_toon",15,1],["m_race",7,2],["m_color",16,3],["m_control",8,4],["m_teamId",1,5],["m_handicap",0,6],["m_observe",17,7],["m_result",17,8]]]],["_array",[[0,5],18]],["_optional",[19]],["_blob",[[0,10]]],["_blob",[[0,11]]],["_struct",[[["m_file",22,0]]]],["_bool",[]],["_int",[[-9223372036854776000,64]]],["_blob",[[0,12]]],["_blob",[[40,0]]],["_array",[[0,4],27]],["_optional",[28]],["_struct",[[["m_playerList",20,0],["m_title",21,1],["m_difficulty",7,2],["m_thumbnail",23,3],["m_isBlizzardMap",24,4],["m_timeUTC",25,5],["m_timeLocalOffset",25,6],["m_description",26,7],["m_imageFilePath",22,8],["m_mapFileName",22,9],["m_cacheHandles",29,10],["m_miniSave",24,11],["m_gameSpeed",10,12],["m_defaultDifficulty",2,13]]]],["_optional",[8]],["_struct",[[["m_race",31,-1]]]],["_struct",[[["m_team",31,-1]]]],["_struct",[[["m_name",7,-7],["m_randomSeed",5,-6],["m_racePreference",32,-5],["m_teamPreference",33,-4],["m_testMap",24,-3],["m_testAuto",24,-2],["m_observe",17,-1]]]],["_array",[[0,5],34]],["_struct",[[["m_lockTeams",24,-11],["m_teamsTogether",24,-10],["m_advancedSharedControl",24,-9],["m_randomRaces",24,-8],["m_battleNet",24,-7],["m_amm",24,-6],["m_ranked",24,-5],["m_noVictoryOrDefeat",24,-4],["m_fog",17,-3],["m_observers",17,-2],["m_userDifficulty",17,-1]]]],["_int",[[0,5]]],["_int",[[1,4]]],["_int",[[1,5]]],["_int",[[1,8]]],["_bitarray",[[0,6]]],["_bitarray",[[0,8]]],["_bitarray",[[0,2]]],["_struct",[[["m_allowedColors",41,-5],["m_allowedRaces",42,-4],["m_allowedDifficulty",41,-3],["m_allowedControls",42,-2],["m_allowedObserveTypes",43,-1]]]],["_array",[[0,5],44]],["_struct",[[["m_randomValue",5,-23],["m_gameCacheName",21,-22],["m_gameOptions",36,-21],["m_gameSpeed",10,-20],["m_gameType",10,-19],["m_maxUsers",37,-18],["m_maxObservers",37,-17],["m_maxPlayers",37,-16],["m_maxTeams",38,-15],["m_maxColors",39,-14],["m_maxRaces",40,-13],["m_maxControls",40,-12],["m_mapSizeX",8,-11],["m_mapSizeY",8,-10],["m_mapFileSyncChecksum",5,-9],["m_mapFileName",22,-8],["m_mapAuthorName",7,-7],["m_modFileSyncChecksum",5,-6],["m_slotDescriptions",45,-5],["m_defaultDifficulty",2,-4],["m_cacheHandles",28,-3],["m_isBlizzardMap",24,-2],["m_isPremadeFFA",24,-1]]]],["_optional",[1]],["_optional",[37]],["_struct",[[["m_color",48,-1]]]],["_array",[[0,5],5]],["_struct",[[["m_control",8,-9],["m_userId",47,-8],["m_teamId",1,-7],["m_colorPref",49,-6],["m_racePref",32,-5],["m_difficulty",2,-4],["m_handicap",0,-3],["m_observe",17,-2],["m_rewards",50,-1]]]],["_array",[[0,5],51]],["_struct",[[["m_phase",10,-9],["m_maxUsers",37,-8],["m_maxObservers",37,-7],["m_slots",52,-6],["m_randomSeed",5,-5],["m_hostUserId",47,-4],["m_isSinglePlayer",24,-3],["m_gameDuration",5,-2],["m_defaultDifficulty",2,-1]]]],["_struct",[[["m_userInitialData",35,-3],["m_gameDescription",46,-2],["m_lobbyState",53,-1]]]],["_struct",[[["m_syncLobbyState",54,-1]]]],["_struct",[[["m_name",13,-5]]]],["_blob",[[0,6]]],["_struct",[[["m_name",57,-5]]]],["_struct",[[["m_name",57,-7],["m_type",5,-6],["m_data",13,-5]]]],["_struct",[[["m_type",5,-7],["m_name",57,-6],["m_data",26,-5]]]],["_struct",[[["m_developmentCheatsEnabled",24,-8],["m_multiplayerCheatsEnabled",24,-7],["m_syncChecksummingEnabled",24,-6],["m_isMapToMapTransition",24,-5]]]],["_struct",[[]]],["_struct",[[["m_fileName",22,-9],["m_automatic",24,-8],["m_overwrite",24,-7],["m_name",7,-6],["m_description",21,-5]]]],["_int",[[-2147483648,32]]],["_struct",[[["x",64,-2],["y",64,-1]]]],["_struct",[[["m_point",65,-4],["m_time",64,-3],["m_verb",21,-2],["m_arguments",21,-1]]]],["_struct",[[["m_data",66,-5]]]],["_int",[[0,17]]],["_int",[[0,16]]],["_struct",[[["m_abilLink",69,-3],["m_abilCmdIndex",37,-2],["m_abilCmdData",31,-1]]]],["_optional",[70]],["_null",[]],["_int",[[0,20]]],["_struct",[[["x",73,-3],["y",73,-2],["z",64,-1]]]],["_struct",[[["m_targetUnitFlags",8,-6],["m_timer",8,-5],["m_tag",5,-4],["m_snapshotUnitLink",69,-3],["m_snapshotPlayerId",47,-2],["m_snapshotPoint",74,-1]]]],["_choice",[[0,2],{"0":["None",72],"1":["TargetPoint",74],"2":["TargetUnit",75],"3":["Data",5]}]],["_optional",[5]],["_struct",[[["m_cmdFlags",68,-8],["m_abil",71,-7],["m_data",76,-6],["m_otherUnit",77,-5]]]],["_array",[[0,8],8]],["_choice",[[0,2],{"0":["None",72],"1":["Mask",42],"2":["OneIndices",79],"3":["ZeroIndices",79]}]],["_struct",[[["m_unitLink",69,-3],["m_intraSubgroupPriority",8,-2],["m_count",8,-1]]]],["_array",[[0,8],81]],["_array",[[0,8],5]],["_struct",[[["m_subgroupIndex",8,-4],["m_removeMask",80,-3],["m_addSubgroups",82,-2],["m_addUnitTags",83,-1]]]],["_struct",[[["m_controlGroupId",1,-6],["m_delta",84,-5]]]],["_struct",[[["m_controlGroupIndex",1,-7],["m_controlGroupUpdate",17,-6],["m_mask",80,-5]]]],["_struct",[[["m_count",8,-6],["m_subgroupCount",8,-5],["m_activeSubgroupIndex",8,-4],["m_unitTagsChecksum",5,-3],["m_subgroupIndicesChecksum",5,-2],["m_subgroupsChecksum",5,-1]]]],["_struct",[[["m_controlGroupId",1,-6],["m_selectionSyncData",87,-5]]]],["_array",[[0,3],64]],["_struct",[[["m_recipientId",1,-6],["m_resources",89,-5]]]],["_struct",[[["m_chatMessage",21,-5]]]],["_int",[[-128,8]]],["_struct",[[["x",64,-3],["y",64,-2],["z",64,-1]]]],["_struct",[[["m_beacon",92,-11],["m_ally",92,-10],["m_autocast",92,-9],["m_targetUnitTag",5,-8],["m_targetUnitSnapshotUnitLink",69,-7],["m_targetUnitSnapshotPlayerId",47,-6],["m_targetPoint",93,-5]]]],["_struct",[[["m_speed",10,-5]]]],["_struct",[[["m_delta",92,-5]]]],["_struct",[[["m_verb",21,-6],["m_arguments",21,-5]]]],["_struct",[[["m_alliance",5,-6],["m_control",5,-5]]]],["_struct",[[["m_unitTag",5,-5]]]],["_struct",[[["m_unitTag",5,-6],["m_flags",8,-5]]]],["_struct",[[["m_conversationId",64,-6],["m_replyId",64,-5]]]],["_struct",[[["m_purchaseItemId",64,-5]]]],["_struct",[[["m_difficultyLevel",64,-5]]]],["_choice",[[0,3],{"0":["None",72],"1":["Checked",24],"2":["ValueChanged",5],"3":["SelectionChanged",64],"4":["TextChanged",22]}]],["_struct",[[["m_controlId",64,-7],["m_eventType",64,-6],["m_eventData",104,-5]]]],["_struct",[[["m_soundHash",5,-6],["m_length",5,-5]]]],["_struct",[[["m_soundHash",83,-2],["m_length",83,-1]]]],["_struct",[[["m_syncInfo",107,-5]]]],["_struct",[[["m_sound",5,-5]]]],["_struct",[[["m_transmissionId",64,-5]]]],["_struct",[[["x",69,-2],["y",69,-1]]]],["_optional",[69]],["_struct",[[["m_target",111,-8],["m_distance",112,-7],["m_pitch",112,-6],["m_yaw",112,-5]]]],["_int",[[0,1]]],["_struct",[[["m_skipType",114,-5]]]],["_struct",[[["m_button",5,-11],["m_down",24,-10],["m_posXUI",5,-9],["m_posYUI",5,-8],["m_posXWorld",64,-7],["m_posYWorld",64,-6],["m_posZWorld",64,-5]]]],["_struct",[[["m_soundtrack",5,-5]]]],["_struct",[[["m_planetId",64,-5]]]],["_struct",[[["m_key",92,-6],["m_flags",92,-5]]]],["_struct",[[["m_resources",89,-5]]]],["_struct",[[["m_fulfillRequestId",64,-5]]]],["_struct",[[["m_cancelRequestId",64,-5]]]],["_struct",[[["m_researchItemId",64,-5]]]],["_struct",[[["m_laggingPlayerId",1,-5]]]],["_struct",[[["m_mercenaryId",64,-5]]]],["_struct",[[["m_battleReportId",64,-6],["m_difficultyLevel",64,-5]]]],["_struct",[[["m_battleReportId",64,-5]]]],["_int",[[0,19]]],["_struct",[[["m_decrementMs",128,-5]]]],["_struct",[[["m_portraitId",64,-5]]]],["_struct",[[["m_functionName",13,-5]]]],["_struct",[[["m_result",64,-5]]]],["_struct",[[["m_gameMenuItemIndex",64,-5]]]],["_struct",[[["m_reason",92,-5]]]],["_struct",[[["m_purchaseCategoryId",64,-5]]]],["_struct",[[["m_button",69,-5]]]],["_struct",[[["m_recipient",17,-3],["m_string",22,-2]]]],["_struct",[[["m_recipient",17,-3],["m_point",65,-2]]]],["_struct",[[["m_progress",64,-2]]]]];

exports.GAME_EVENT = [0, {"5":[62,"NNet.Game.SUserFinishedLoadingSyncEvent"],"7":[56,"NNet.Game.SBankFileEvent"],"8":[58,"NNet.Game.SBankSectionEvent"],"9":[59,"NNet.Game.SBankKeyEvent"],"10":[60,"NNet.Game.SBankValueEvent"],"11":[61,"NNet.Game.SUserOptionsEvent"],"22":[63,"NNet.Game.SSaveGameEvent"],"23":[62,"NNet.Game.SSaveGameDoneEvent"],"25":[62,"NNet.Game.SPlayerLeaveEvent"],"26":[67,"NNet.Game.SGameCheatEvent"],"27":[78,"NNet.Game.SCmdEvent"],"28":[85,"NNet.Game.SSelectionDeltaEvent"],"29":[86,"NNet.Game.SControlGroupUpdateEvent"],"30":[88,"NNet.Game.SSelectionSyncCheckEvent"],"31":[90,"NNet.Game.SResourceTradeEvent"],"32":[91,"NNet.Game.STriggerChatMessageEvent"],"33":[94,"NNet.Game.SAICommunicateEvent"],"34":[95,"NNet.Game.SSetAbsoluteGameSpeedEvent"],"35":[96,"NNet.Game.SAddAbsoluteGameSpeedEvent"],"37":[97,"NNet.Game.SBroadcastCheatEvent"],"38":[98,"NNet.Game.SAllianceEvent"],"39":[99,"NNet.Game.SUnitClickEvent"],"40":[100,"NNet.Game.SUnitHighlightEvent"],"41":[101,"NNet.Game.STriggerReplySelectedEvent"],"44":[62,"NNet.Game.STriggerSkippedEvent"],"45":[106,"NNet.Game.STriggerSoundLengthQueryEvent"],"46":[109,"NNet.Game.STriggerSoundOffsetEvent"],"47":[110,"NNet.Game.STriggerTransmissionOffsetEvent"],"48":[110,"NNet.Game.STriggerTransmissionCompleteEvent"],"49":[113,"NNet.Game.SCameraUpdateEvent"],"50":[62,"NNet.Game.STriggerAbortMissionEvent"],"51":[102,"NNet.Game.STriggerPurchaseMadeEvent"],"52":[62,"NNet.Game.STriggerPurchaseExitEvent"],"53":[103,"NNet.Game.STriggerPlanetMissionLaunchedEvent"],"54":[62,"NNet.Game.STriggerPlanetPanelCanceledEvent"],"55":[105,"NNet.Game.STriggerDialogControlEvent"],"56":[108,"NNet.Game.STriggerSoundLengthSyncEvent"],"57":[115,"NNet.Game.STriggerConversationSkippedEvent"],"58":[116,"NNet.Game.STriggerMouseClickedEvent"],"63":[62,"NNet.Game.STriggerPlanetPanelReplayEvent"],"64":[117,"NNet.Game.STriggerSoundtrackDoneEvent"],"65":[118,"NNet.Game.STriggerPlanetMissionSelectedEvent"],"66":[119,"NNet.Game.STriggerKeyPressedEvent"],"67":[131,"NNet.Game.STriggerMovieFunctionEvent"],"68":[62,"NNet.Game.STriggerPlanetPanelBirthCompleteEvent"],"69":[62,"NNet.Game.STriggerPlanetPanelDeathCompleteEvent"],"70":[120,"NNet.Game.SResourceRequestEvent"],"71":[121,"NNet.Game.SResourceRequestFulfillEvent"],"72":[122,"NNet.Game.SResourceRequestCancelEvent"],"73":[62,"NNet.Game.STriggerResearchPanelExitEvent"],"74":[62,"NNet.Game.STriggerResearchPanelPurchaseEvent"],"75":[123,"NNet.Game.STriggerResearchPanelSelectionChangedEvent"],"76":[124,"NNet.Game.SLagMessageEvent"],"77":[62,"NNet.Game.STriggerMercenaryPanelExitEvent"],"78":[62,"NNet.Game.STriggerMercenaryPanelPurchaseEvent"],"79":[125,"NNet.Game.STriggerMercenaryPanelSelectionChangedEvent"],"80":[62,"NNet.Game.STriggerVictoryPanelExitEvent"],"81":[62,"NNet.Game.STriggerBattleReportPanelExitEvent"],"82":[126,"NNet.Game.STriggerBattleReportPanelPlayMissionEvent"],"83":[127,"NNet.Game.STriggerBattleReportPanelPlaySceneEvent"],"84":[127,"NNet.Game.STriggerBattleReportPanelSelectionChangedEvent"],"85":[103,"NNet.Game.STriggerVictoryPanelPlayMissionAgainEvent"],"86":[62,"NNet.Game.STriggerMovieStartedEvent"],"87":[62,"NNet.Game.STriggerMovieFinishedEvent"],"88":[129,"NNet.Game.SDecrementGameTimeRemainingEvent"],"89":[130,"NNet.Game.STriggerPortraitLoadedEvent"],"90":[132,"NNet.Game.STriggerCustomDialogDismissedEvent"],"91":[133,"NNet.Game.STriggerGameMenuItemSelectedEvent"],"92":[134,"NNet.Game.STriggerCameraMoveEvent"],"93":[102,"NNet.Game.STriggerPurchasePanelSelectedPurchaseItemChangedEvent"],"94":[135,"NNet.Game.STriggerPurchasePanelSelectedPurchaseCategoryChangedEvent"],"95":[136,"NNet.Game.STriggerButtonPressedEvent"],"96":[62,"NNet.Game.STriggerGameCreditsFinishedEvent"]}];
exports.MESSAGE_EVENT = [1, {"0":[137,"NNet.Game.SChatMessage"],"1":[138,"NNet.Game.SPingMessage"],"2":[139,"NNet.Game.SLoadingProgressMessage"],"3":[62,"NNet.Game.SServerPingMessage"]}];
exports.TRACKER_EVENT = [null, {}];

exports.REPLAY = [6, null, 11, 30, 55];
