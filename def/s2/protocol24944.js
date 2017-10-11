// Generated from protocol24944.py
exports.VERSION = 24944;

exports.TYPE_INFO = [["_int",[[0,7]]],["_int",[[0,4]]],["_int",[[0,5]]],["_int",[[0,6]]],["_int",[[0,14]]],["_int",[[0,22]]],["_int",[[0,32]]],["_choice",[[0,2],{"0":["m_uint6",3],"1":["m_uint14",4],"2":["m_uint22",5],"3":["m_uint32",6]}]],["_struct",[[["m_userId",2,-1]]]],["_blob",[[0,8]]],["_int",[[0,8]]],["_struct",[[["m_flags",10,0],["m_major",10,1],["m_minor",10,2],["m_revision",10,3],["m_build",6,4],["m_baseBuild",6,5]]]],["_int",[[0,3]]],["_struct",[[["m_signature",9,0],["m_version",11,1],["m_type",12,2],["m_elapsedGameLoops",6,3]]]],["_fourcc",[]],["_blob",[[0,7]]],["_int",[[0,64]]],["_struct",[[["m_region",10,0],["m_programId",14,1],["m_realm",6,2],["m_name",15,3],["m_id",16,4]]]],["_struct",[[["m_a",10,0],["m_r",10,1],["m_g",10,2],["m_b",10,3]]]],["_int",[[0,2]]],["_optional",[10]],["_struct",[[["m_name",9,0],["m_toon",17,1],["m_race",9,2],["m_color",18,3],["m_control",10,4],["m_teamId",1,5],["m_handicap",0,6],["m_observe",19,7],["m_result",19,8],["m_workingSetSlotId",20,9]]]],["_array",[[0,5],21]],["_optional",[22]],["_blob",[[0,10]]],["_blob",[[0,11]]],["_struct",[[["m_file",25,0]]]],["_bool",[]],["_int",[[-9223372036854776000,64]]],["_blob",[[0,12]]],["_blob",[[40,0]]],["_array",[[0,6],30]],["_optional",[31]],["_array",[[0,6],25]],["_optional",[33]],["_struct",[[["m_playerList",23,0],["m_title",24,1],["m_difficulty",9,2],["m_thumbnail",26,3],["m_isBlizzardMap",27,4],["m_timeUTC",28,5],["m_timeLocalOffset",28,6],["m_description",29,7],["m_imageFilePath",25,8],["m_campaignIndex",10,15],["m_mapFileName",25,9],["m_cacheHandles",32,10],["m_miniSave",27,11],["m_gameSpeed",12,12],["m_defaultDifficulty",3,13],["m_modPaths",34,14]]]],["_optional",[9]],["_optional",[6]],["_struct",[[["m_race",20,-1]]]],["_struct",[[["m_team",20,-1]]]],["_struct",[[["m_name",9,-12],["m_clanTag",36,-11],["m_highestLeague",20,-10],["m_combinedRaceLevels",37,-9],["m_randomSeed",6,-8],["m_racePreference",38,-7],["m_teamPreference",39,-6],["m_testMap",27,-5],["m_testAuto",27,-4],["m_examine",27,-3],["m_customInterface",27,-2],["m_observe",19,-1]]]],["_array",[[0,5],40]],["_struct",[[["m_lockTeams",27,-12],["m_teamsTogether",27,-11],["m_advancedSharedControl",27,-10],["m_randomRaces",27,-9],["m_battleNet",27,-8],["m_amm",27,-7],["m_competitive",27,-6],["m_noVictoryOrDefeat",27,-5],["m_fog",19,-4],["m_observers",19,-3],["m_userDifficulty",19,-2],["m_clientDebugFlags",16,-1]]]],["_int",[[1,4]]],["_int",[[1,8]]],["_bitarray",[[0,6]]],["_bitarray",[[0,8]]],["_bitarray",[[0,2]]],["_bitarray",[[0,7]]],["_struct",[[["m_allowedColors",45,-6],["m_allowedRaces",46,-5],["m_allowedDifficulty",45,-4],["m_allowedControls",46,-3],["m_allowedObserveTypes",47,-2],["m_allowedAIBuilds",48,-1]]]],["_array",[[0,5],49]],["_struct",[[["m_randomValue",6,-25],["m_gameCacheName",24,-24],["m_gameOptions",42,-23],["m_gameSpeed",12,-22],["m_gameType",12,-21],["m_maxUsers",2,-20],["m_maxObservers",2,-19],["m_maxPlayers",2,-18],["m_maxTeams",43,-17],["m_maxColors",3,-16],["m_maxRaces",44,-15],["m_maxControls",44,-14],["m_mapSizeX",10,-13],["m_mapSizeY",10,-12],["m_mapFileSyncChecksum",6,-11],["m_mapFileName",25,-10],["m_mapAuthorName",9,-9],["m_modFileSyncChecksum",6,-8],["m_slotDescriptions",50,-7],["m_defaultDifficulty",3,-6],["m_defaultAIBuild",0,-5],["m_cacheHandles",31,-4],["m_isBlizzardMap",27,-3],["m_isPremadeFFA",27,-2],["m_isCoopMode",27,-1]]]],["_optional",[1]],["_optional",[2]],["_struct",[[["m_color",53,-1]]]],["_array",[[0,6],6]],["_array",[[0,9],6]],["_struct",[[["m_control",10,-13],["m_userId",52,-12],["m_teamId",1,-11],["m_colorPref",54,-10],["m_racePref",38,-9],["m_difficulty",3,-8],["m_aiBuild",0,-7],["m_handicap",0,-6],["m_observe",19,-5],["m_workingSetSlotId",20,-4],["m_rewards",55,-3],["m_toonHandle",15,-2],["m_licenses",56,-1]]]],["_array",[[0,5],57]],["_struct",[[["m_phase",12,-10],["m_maxUsers",2,-9],["m_maxObservers",2,-8],["m_slots",58,-7],["m_randomSeed",6,-6],["m_hostUserId",52,-5],["m_isSinglePlayer",27,-4],["m_gameDuration",6,-3],["m_defaultDifficulty",3,-2],["m_defaultAIBuild",0,-1]]]],["_struct",[[["m_userInitialData",41,-3],["m_gameDescription",51,-2],["m_lobbyState",59,-1]]]],["_struct",[[["m_syncLobbyState",60,-1]]]],["_struct",[[["m_name",15,-1]]]],["_blob",[[0,6]]],["_struct",[[["m_name",63,-1]]]],["_struct",[[["m_name",63,-3],["m_type",6,-2],["m_data",15,-1]]]],["_struct",[[["m_type",6,-3],["m_name",63,-2],["m_data",29,-1]]]],["_array",[[0,5],10]],["_struct",[[["m_signature",67,-2],["m_toonHandle",15,-1]]]],["_struct",[[["m_gameFullyDownloaded",27,-7],["m_developmentCheatsEnabled",27,-6],["m_multiplayerCheatsEnabled",27,-5],["m_syncChecksummingEnabled",27,-4],["m_isMapToMapTransition",27,-3],["m_startingRally",27,-2],["m_baseBuildNum",6,-1]]]],["_struct",[[]]],["_int",[[0,16]]],["_struct",[[["x",71,-2],["y",71,-1]]]],["_struct",[[["m_which",12,-2],["m_target",72,-1]]]],["_struct",[[["m_fileName",25,-5],["m_automatic",27,-4],["m_overwrite",27,-3],["m_name",9,-2],["m_description",24,-1]]]],["_int",[[-2147483648,32]]],["_struct",[[["x",75,-2],["y",75,-1]]]],["_struct",[[["m_point",76,-4],["m_time",75,-3],["m_verb",24,-2],["m_arguments",24,-1]]]],["_struct",[[["m_data",77,-1]]]],["_int",[[0,20]]],["_struct",[[["m_abilLink",71,-3],["m_abilCmdIndex",2,-2],["m_abilCmdData",20,-1]]]],["_optional",[80]],["_null",[]],["_struct",[[["x",79,-3],["y",79,-2],["z",75,-1]]]],["_struct",[[["m_targetUnitFlags",10,-7],["m_timer",10,-6],["m_tag",6,-5],["m_snapshotUnitLink",71,-4],["m_snapshotControlPlayerId",52,-3],["m_snapshotUpkeepPlayerId",52,-2],["m_snapshotPoint",83,-1]]]],["_choice",[[0,2],{"0":["None",82],"1":["TargetPoint",83],"2":["TargetUnit",84],"3":["Data",6]}]],["_struct",[[["m_cmdFlags",79,-4],["m_abil",81,-3],["m_data",85,-2],["m_otherUnit",37,-1]]]],["_int",[[0,9]]],["_bitarray",[[0,9]]],["_array",[[0,9],87]],["_choice",[[0,2],{"0":["None",82],"1":["Mask",88],"2":["OneIndices",89],"3":["ZeroIndices",89]}]],["_struct",[[["m_unitLink",71,-4],["m_subgroupPriority",10,-3],["m_intraSubgroupPriority",10,-2],["m_count",87,-1]]]],["_array",[[0,9],91]],["_struct",[[["m_subgroupIndex",87,-4],["m_removeMask",90,-3],["m_addSubgroups",92,-2],["m_addUnitTags",56,-1]]]],["_struct",[[["m_controlGroupId",1,-2],["m_delta",93,-1]]]],["_struct",[[["m_controlGroupIndex",1,-3],["m_controlGroupUpdate",19,-2],["m_mask",90,-1]]]],["_struct",[[["m_count",87,-6],["m_subgroupCount",87,-5],["m_activeSubgroupIndex",87,-4],["m_unitTagsChecksum",6,-3],["m_subgroupIndicesChecksum",6,-2],["m_subgroupsChecksum",6,-1]]]],["_struct",[[["m_controlGroupId",1,-2],["m_selectionSyncData",96,-1]]]],["_array",[[0,3],75]],["_struct",[[["m_recipientId",1,-2],["m_resources",98,-1]]]],["_struct",[[["m_chatMessage",24,-1]]]],["_int",[[-128,8]]],["_struct",[[["x",75,-3],["y",75,-2],["z",75,-1]]]],["_struct",[[["m_beacon",101,-9],["m_ally",101,-8],["m_flags",101,-7],["m_build",101,-6],["m_targetUnitTag",6,-5],["m_targetUnitSnapshotUnitLink",71,-4],["m_targetUnitSnapshotUpkeepPlayerId",101,-3],["m_targetUnitSnapshotControlPlayerId",101,-2],["m_targetPoint",102,-1]]]],["_struct",[[["m_speed",12,-1]]]],["_struct",[[["m_delta",101,-1]]]],["_struct",[[["m_point",76,-3],["m_unit",6,-2],["m_pingedMinimap",27,-1]]]],["_struct",[[["m_verb",24,-2],["m_arguments",24,-1]]]],["_struct",[[["m_alliance",6,-2],["m_control",6,-1]]]],["_struct",[[["m_unitTag",6,-1]]]],["_struct",[[["m_unitTag",6,-2],["m_flags",10,-1]]]],["_struct",[[["m_conversationId",75,-2],["m_replyId",75,-1]]]],["_optional",[15]],["_struct",[[["m_gameUserId",1,-5],["m_observe",19,-4],["m_name",9,-3],["m_toonHandle",112,-2],["m_clanTag",36,-1]]]],["_array",[[0,5],113]],["_int",[[0,1]]],["_struct",[[["m_userInfos",114,-2],["m_method",115,-1]]]],["_struct",[[["m_purchaseItemId",75,-1]]]],["_struct",[[["m_difficultyLevel",75,-1]]]],["_choice",[[0,3],{"0":["None",82],"1":["Checked",27],"2":["ValueChanged",6],"3":["SelectionChanged",75],"4":["TextChanged",25],"5":["MouseButton",6]}]],["_struct",[[["m_controlId",75,-3],["m_eventType",75,-2],["m_eventData",119,-1]]]],["_struct",[[["m_soundHash",6,-2],["m_length",6,-1]]]],["_array",[[0,7],6]],["_struct",[[["m_soundHash",122,-2],["m_length",122,-1]]]],["_struct",[[["m_syncInfo",123,-1]]]],["_struct",[[["m_sound",6,-1]]]],["_struct",[[["m_transmissionId",75,-2],["m_thread",6,-1]]]],["_struct",[[["m_transmissionId",75,-1]]]],["_optional",[72]],["_optional",[71]],["_struct",[[["m_target",128,-4],["m_distance",129,-3],["m_pitch",129,-2],["m_yaw",129,-1]]]],["_struct",[[["m_skipType",115,-1]]]],["_int",[[0,11]]],["_struct",[[["x",132,-2],["y",132,-1]]]],["_struct",[[["m_button",6,-4],["m_down",27,-3],["m_posUI",133,-2],["m_posWorld",83,-1]]]],["_struct",[[["m_posUI",133,-2],["m_posWorld",83,-1]]]],["_struct",[[["m_achievementLink",71,-1]]]],["_struct",[[["m_abilLink",71,-3],["m_abilCmdIndex",2,-2],["m_state",101,-1]]]],["_struct",[[["m_soundtrack",6,-1]]]],["_struct",[[["m_planetId",75,-1]]]],["_struct",[[["m_key",101,-2],["m_flags",101,-1]]]],["_struct",[[["m_resources",98,-1]]]],["_struct",[[["m_fulfillRequestId",75,-1]]]],["_struct",[[["m_cancelRequestId",75,-1]]]],["_struct",[[["m_researchItemId",75,-1]]]],["_struct",[[["m_mercenaryId",75,-1]]]],["_struct",[[["m_battleReportId",75,-2],["m_difficultyLevel",75,-1]]]],["_struct",[[["m_battleReportId",75,-1]]]],["_int",[[0,19]]],["_struct",[[["m_decrementMs",148,-1]]]],["_struct",[[["m_portraitId",75,-1]]]],["_struct",[[["m_functionName",15,-1]]]],["_struct",[[["m_result",75,-1]]]],["_struct",[[["m_gameMenuItemIndex",75,-1]]]],["_struct",[[["m_reason",101,-1]]]],["_struct",[[["m_purchaseCategoryId",75,-1]]]],["_struct",[[["m_button",71,-1]]]],["_struct",[[["m_cutsceneId",75,-2],["m_bookmarkName",15,-1]]]],["_struct",[[["m_cutsceneId",75,-1]]]],["_struct",[[["m_cutsceneId",75,-3],["m_conversationLine",15,-2],["m_altConversationLine",15,-1]]]],["_struct",[[["m_cutsceneId",75,-2],["m_conversationLine",15,-1]]]],["_struct",[[["m_observe",19,-4],["m_name",9,-3],["m_toonHandle",112,-2],["m_clanTag",36,-1]]]],["_struct",[[["m_recipient",12,-2],["m_string",25,-1]]]],["_struct",[[["m_recipient",12,-2],["m_point",76,-1]]]],["_struct",[[["m_progress",75,-1]]]],["_struct",[[["m_scoreValueMineralsCurrent",75,0],["m_scoreValueVespeneCurrent",75,1],["m_scoreValueMineralsCollectionRate",75,2],["m_scoreValueVespeneCollectionRate",75,3],["m_scoreValueWorkersActiveCount",75,4],["m_scoreValueMineralsUsedInProgressArmy",75,5],["m_scoreValueMineralsUsedInProgressEconomy",75,6],["m_scoreValueMineralsUsedInProgressTechnology",75,7],["m_scoreValueVespeneUsedInProgressArmy",75,8],["m_scoreValueVespeneUsedInProgressEconomy",75,9],["m_scoreValueVespeneUsedInProgressTechnology",75,10],["m_scoreValueMineralsUsedCurrentArmy",75,11],["m_scoreValueMineralsUsedCurrentEconomy",75,12],["m_scoreValueMineralsUsedCurrentTechnology",75,13],["m_scoreValueVespeneUsedCurrentArmy",75,14],["m_scoreValueVespeneUsedCurrentEconomy",75,15],["m_scoreValueVespeneUsedCurrentTechnology",75,16],["m_scoreValueMineralsLostArmy",75,17],["m_scoreValueMineralsLostEconomy",75,18],["m_scoreValueMineralsLostTechnology",75,19],["m_scoreValueVespeneLostArmy",75,20],["m_scoreValueVespeneLostEconomy",75,21],["m_scoreValueVespeneLostTechnology",75,22],["m_scoreValueMineralsKilledArmy",75,23],["m_scoreValueMineralsKilledEconomy",75,24],["m_scoreValueMineralsKilledTechnology",75,25],["m_scoreValueVespeneKilledArmy",75,26],["m_scoreValueVespeneKilledEconomy",75,27],["m_scoreValueVespeneKilledTechnology",75,28],["m_scoreValueFoodUsed",75,29],["m_scoreValueFoodMade",75,30],["m_scoreValueMineralsUsedActiveForces",75,31],["m_scoreValueVespeneUsedActiveForces",75,32]]]],["_struct",[[["m_playerId",1,0],["m_stats",165,1]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_unitTypeName",24,2],["m_controlPlayerId",1,3],["m_upkeepPlayerId",1,4],["m_x",10,5],["m_y",10,6]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_killerPlayerId",52,2],["m_x",10,3],["m_y",10,4]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_controlPlayerId",1,2],["m_upkeepPlayerId",1,3]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_unitTypeName",24,2]]]],["_struct",[[["m_playerId",1,0],["m_upgradeTypeName",24,1],["m_count",75,2]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1]]]],["_array",[[0,10],75]],["_struct",[[["m_firstUnitIndex",6,0],["m_items",173,1]]]]];

exports.GAME_EVENT = [0, {"5":[70,"NNet.Game.SUserFinishedLoadingSyncEvent"],"7":[69,"NNet.Game.SUserOptionsEvent"],"9":[62,"NNet.Game.SBankFileEvent"],"10":[64,"NNet.Game.SBankSectionEvent"],"11":[65,"NNet.Game.SBankKeyEvent"],"12":[66,"NNet.Game.SBankValueEvent"],"13":[68,"NNet.Game.SBankSignatureEvent"],"14":[73,"NNet.Game.SCameraSaveEvent"],"21":[74,"NNet.Game.SSaveGameEvent"],"22":[70,"NNet.Game.SSaveGameDoneEvent"],"23":[70,"NNet.Game.SLoadGameDoneEvent"],"26":[78,"NNet.Game.SGameCheatEvent"],"27":[86,"NNet.Game.SCmdEvent"],"28":[94,"NNet.Game.SSelectionDeltaEvent"],"29":[95,"NNet.Game.SControlGroupUpdateEvent"],"30":[97,"NNet.Game.SSelectionSyncCheckEvent"],"31":[99,"NNet.Game.SResourceTradeEvent"],"32":[100,"NNet.Game.STriggerChatMessageEvent"],"33":[103,"NNet.Game.SAICommunicateEvent"],"34":[104,"NNet.Game.SSetAbsoluteGameSpeedEvent"],"35":[105,"NNet.Game.SAddAbsoluteGameSpeedEvent"],"36":[106,"NNet.Game.STriggerPingEvent"],"37":[107,"NNet.Game.SBroadcastCheatEvent"],"38":[108,"NNet.Game.SAllianceEvent"],"39":[109,"NNet.Game.SUnitClickEvent"],"40":[110,"NNet.Game.SUnitHighlightEvent"],"41":[111,"NNet.Game.STriggerReplySelectedEvent"],"43":[116,"NNet.Game.SHijackReplayGameEvent"],"44":[70,"NNet.Game.STriggerSkippedEvent"],"45":[121,"NNet.Game.STriggerSoundLengthQueryEvent"],"46":[125,"NNet.Game.STriggerSoundOffsetEvent"],"47":[126,"NNet.Game.STriggerTransmissionOffsetEvent"],"48":[127,"NNet.Game.STriggerTransmissionCompleteEvent"],"49":[130,"NNet.Game.SCameraUpdateEvent"],"50":[70,"NNet.Game.STriggerAbortMissionEvent"],"51":[117,"NNet.Game.STriggerPurchaseMadeEvent"],"52":[70,"NNet.Game.STriggerPurchaseExitEvent"],"53":[118,"NNet.Game.STriggerPlanetMissionLaunchedEvent"],"54":[70,"NNet.Game.STriggerPlanetPanelCanceledEvent"],"55":[120,"NNet.Game.STriggerDialogControlEvent"],"56":[124,"NNet.Game.STriggerSoundLengthSyncEvent"],"57":[131,"NNet.Game.STriggerConversationSkippedEvent"],"58":[134,"NNet.Game.STriggerMouseClickedEvent"],"59":[135,"NNet.Game.STriggerMouseMovedEvent"],"60":[136,"NNet.Game.SAchievementAwardedEvent"],"62":[137,"NNet.Game.STriggerTargetModeUpdateEvent"],"63":[70,"NNet.Game.STriggerPlanetPanelReplayEvent"],"64":[138,"NNet.Game.STriggerSoundtrackDoneEvent"],"65":[139,"NNet.Game.STriggerPlanetMissionSelectedEvent"],"66":[140,"NNet.Game.STriggerKeyPressedEvent"],"67":[151,"NNet.Game.STriggerMovieFunctionEvent"],"68":[70,"NNet.Game.STriggerPlanetPanelBirthCompleteEvent"],"69":[70,"NNet.Game.STriggerPlanetPanelDeathCompleteEvent"],"70":[141,"NNet.Game.SResourceRequestEvent"],"71":[142,"NNet.Game.SResourceRequestFulfillEvent"],"72":[143,"NNet.Game.SResourceRequestCancelEvent"],"73":[70,"NNet.Game.STriggerResearchPanelExitEvent"],"74":[70,"NNet.Game.STriggerResearchPanelPurchaseEvent"],"75":[144,"NNet.Game.STriggerResearchPanelSelectionChangedEvent"],"77":[70,"NNet.Game.STriggerMercenaryPanelExitEvent"],"78":[70,"NNet.Game.STriggerMercenaryPanelPurchaseEvent"],"79":[145,"NNet.Game.STriggerMercenaryPanelSelectionChangedEvent"],"80":[70,"NNet.Game.STriggerVictoryPanelExitEvent"],"81":[70,"NNet.Game.STriggerBattleReportPanelExitEvent"],"82":[146,"NNet.Game.STriggerBattleReportPanelPlayMissionEvent"],"83":[147,"NNet.Game.STriggerBattleReportPanelPlaySceneEvent"],"84":[147,"NNet.Game.STriggerBattleReportPanelSelectionChangedEvent"],"85":[118,"NNet.Game.STriggerVictoryPanelPlayMissionAgainEvent"],"86":[70,"NNet.Game.STriggerMovieStartedEvent"],"87":[70,"NNet.Game.STriggerMovieFinishedEvent"],"88":[149,"NNet.Game.SDecrementGameTimeRemainingEvent"],"89":[150,"NNet.Game.STriggerPortraitLoadedEvent"],"90":[152,"NNet.Game.STriggerCustomDialogDismissedEvent"],"91":[153,"NNet.Game.STriggerGameMenuItemSelectedEvent"],"92":[154,"NNet.Game.STriggerCameraMoveEvent"],"93":[117,"NNet.Game.STriggerPurchasePanelSelectedPurchaseItemChangedEvent"],"94":[155,"NNet.Game.STriggerPurchasePanelSelectedPurchaseCategoryChangedEvent"],"95":[156,"NNet.Game.STriggerButtonPressedEvent"],"96":[70,"NNet.Game.STriggerGameCreditsFinishedEvent"],"97":[157,"NNet.Game.STriggerCutsceneBookmarkFiredEvent"],"98":[158,"NNet.Game.STriggerCutsceneEndSceneFiredEvent"],"99":[159,"NNet.Game.STriggerCutsceneConversationLineEvent"],"100":[160,"NNet.Game.STriggerCutsceneConversationLineMissingEvent"],"101":[70,"NNet.Game.SGameUserLeaveEvent"],"102":[161,"NNet.Game.SGameUserJoinEvent"]}];
exports.MESSAGE_EVENT = [1, {"0":[162,"NNet.Game.SChatMessage"],"1":[163,"NNet.Game.SPingMessage"],"2":[164,"NNet.Game.SLoadingProgressMessage"],"3":[70,"NNet.Game.SServerPingMessage"]}];
exports.TRACKER_EVENT = [2, {"0":[166,"NNet.Replay.Tracker.SPlayerStatsEvent"],"1":[167,"NNet.Replay.Tracker.SUnitBornEvent"],"2":[168,"NNet.Replay.Tracker.SUnitDiedEvent"],"3":[169,"NNet.Replay.Tracker.SUnitOwnerChangeEvent"],"4":[170,"NNet.Replay.Tracker.SUnitTypeChangeEvent"],"5":[171,"NNet.Replay.Tracker.SUpgradeEvent"],"6":[167,"NNet.Replay.Tracker.SUnitInitEvent"],"7":[172,"NNet.Replay.Tracker.SUnitDoneEvent"],"8":[174,"NNet.Replay.Tracker.SUnitPositionsEvent"]}];

exports.REPLAY = [7, 8, 13, 35, 61];
