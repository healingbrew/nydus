// Generated from protocol41609.py
exports.VERSION = 41609;

exports.TYPE_INFO = [["_int",[[0,7]]],["_int",[[0,4]]],["_int",[[0,5]]],["_int",[[0,6]]],["_int",[[0,14]]],["_int",[[0,22]]],["_int",[[0,32]]],["_choice",[[0,2],{"0":["m_uint6",3],"1":["m_uint14",4],"2":["m_uint22",5],"3":["m_uint32",6]}]],["_struct",[[["m_userId",2,-1]]]],["_blob",[[0,8]]],["_int",[[0,8]]],["_struct",[[["m_flags",10,0],["m_major",10,1],["m_minor",10,2],["m_revision",10,3],["m_build",6,4],["m_baseBuild",6,5]]]],["_int",[[0,3]]],["_bool",[]],["_array",[[16,0],10]],["_optional",[14]],["_blob",[[16,0]]],["_struct",[[["m_dataDeprecated",15,0],["m_data",16,1]]]],["_struct",[[["m_signature",9,0],["m_version",11,1],["m_type",12,2],["m_elapsedGameLoops",6,3],["m_useScaledTime",13,4],["m_ngdpRootKey",17,5],["m_dataBuildNum",6,6],["m_fixedFileHash",17,7]]]],["_fourcc",[]],["_blob",[[0,7]]],["_int",[[0,64]]],["_struct",[[["m_region",10,0],["m_programId",19,1],["m_realm",6,2],["m_name",20,3],["m_id",21,4]]]],["_struct",[[["m_a",10,0],["m_r",10,1],["m_g",10,2],["m_b",10,3]]]],["_int",[[0,2]]],["_optional",[10]],["_struct",[[["m_name",9,0],["m_toon",22,1],["m_race",9,2],["m_color",23,3],["m_control",10,4],["m_teamId",1,5],["m_handicap",0,6],["m_observe",24,7],["m_result",24,8],["m_workingSetSlotId",25,9],["m_hero",9,10]]]],["_array",[[0,5],26]],["_optional",[27]],["_blob",[[0,10]]],["_blob",[[0,11]]],["_struct",[[["m_file",30,0]]]],["_optional",[13]],["_int",[[-9223372036854776000,64]]],["_blob",[[0,12]]],["_blob",[[40,0]]],["_array",[[0,6],35]],["_optional",[36]],["_array",[[0,6],30]],["_optional",[38]],["_struct",[[["m_playerList",28,0],["m_title",29,1],["m_difficulty",9,2],["m_thumbnail",31,3],["m_isBlizzardMap",13,4],["m_restartAsTransitionMap",32,16],["m_timeUTC",33,5],["m_timeLocalOffset",33,6],["m_description",34,7],["m_imageFilePath",30,8],["m_campaignIndex",10,15],["m_mapFileName",30,9],["m_cacheHandles",37,10],["m_miniSave",13,11],["m_gameSpeed",12,12],["m_defaultDifficulty",3,13],["m_modPaths",39,14]]]],["_optional",[9]],["_optional",[35]],["_optional",[6]],["_struct",[[["m_race",25,-1]]]],["_struct",[[["m_team",25,-1]]]],["_blob",[[0,9]]],["_struct",[[["m_name",9,-18],["m_clanTag",41,-17],["m_clanLogo",42,-16],["m_highestLeague",25,-15],["m_combinedRaceLevels",43,-14],["m_randomSeed",6,-13],["m_racePreference",44,-12],["m_teamPreference",45,-11],["m_testMap",13,-10],["m_testAuto",13,-9],["m_examine",13,-8],["m_customInterface",13,-7],["m_testType",6,-6],["m_observe",24,-5],["m_hero",46,-4],["m_skin",46,-3],["m_mount",46,-2],["m_toonHandle",20,-1]]]],["_array",[[0,5],47]],["_struct",[[["m_lockTeams",13,-15],["m_teamsTogether",13,-14],["m_advancedSharedControl",13,-13],["m_randomRaces",13,-12],["m_battleNet",13,-11],["m_amm",13,-10],["m_competitive",13,-9],["m_practice",13,-8],["m_cooperative",13,-7],["m_noVictoryOrDefeat",13,-6],["m_heroDuplicatesAllowed",13,-5],["m_fog",24,-4],["m_observers",24,-3],["m_userDifficulty",24,-2],["m_clientDebugFlags",21,-1]]]],["_int",[[1,4]]],["_int",[[1,8]]],["_bitarray",[[0,6]]],["_bitarray",[[0,8]]],["_bitarray",[[0,2]]],["_bitarray",[[0,7]]],["_struct",[[["m_allowedColors",52,-6],["m_allowedRaces",53,-5],["m_allowedDifficulty",52,-4],["m_allowedControls",53,-3],["m_allowedObserveTypes",54,-2],["m_allowedAIBuilds",55,-1]]]],["_array",[[0,5],56]],["_struct",[[["m_randomValue",6,-26],["m_gameCacheName",29,-25],["m_gameOptions",49,-24],["m_gameSpeed",12,-23],["m_gameType",12,-22],["m_maxUsers",2,-21],["m_maxObservers",2,-20],["m_maxPlayers",2,-19],["m_maxTeams",50,-18],["m_maxColors",3,-17],["m_maxRaces",51,-16],["m_maxControls",10,-15],["m_mapSizeX",10,-14],["m_mapSizeY",10,-13],["m_mapFileSyncChecksum",6,-12],["m_mapFileName",30,-11],["m_mapAuthorName",9,-10],["m_modFileSyncChecksum",6,-9],["m_slotDescriptions",57,-8],["m_defaultDifficulty",3,-7],["m_defaultAIBuild",0,-6],["m_cacheHandles",36,-5],["m_hasExtensionMod",13,-4],["m_isBlizzardMap",13,-3],["m_isPremadeFFA",13,-2],["m_isCoopMode",13,-1]]]],["_optional",[1]],["_optional",[2]],["_struct",[[["m_color",60,-1]]]],["_array",[[0,4],46]],["_array",[[0,17],6]],["_array",[[0,9],6]],["_struct",[[["m_control",10,-20],["m_userId",59,-19],["m_teamId",1,-18],["m_colorPref",61,-17],["m_racePref",44,-16],["m_difficulty",3,-15],["m_aiBuild",0,-14],["m_handicap",0,-13],["m_observe",24,-12],["m_logoIndex",6,-11],["m_hero",46,-10],["m_skin",46,-9],["m_mount",46,-8],["m_artifacts",62,-7],["m_workingSetSlotId",25,-6],["m_rewards",63,-5],["m_toonHandle",20,-4],["m_licenses",64,-3],["m_tandemLeaderUserId",59,-2],["m_hasSilencePenalty",13,-1]]]],["_array",[[0,5],65]],["_struct",[[["m_phase",12,-11],["m_maxUsers",2,-10],["m_maxObservers",2,-9],["m_slots",66,-8],["m_randomSeed",6,-7],["m_hostUserId",59,-6],["m_isSinglePlayer",13,-5],["m_pickedMapTag",10,-4],["m_gameDuration",6,-3],["m_defaultDifficulty",3,-2],["m_defaultAIBuild",0,-1]]]],["_struct",[[["m_userInitialData",48,-3],["m_gameDescription",58,-2],["m_lobbyState",67,-1]]]],["_struct",[[["m_syncLobbyState",68,-1]]]],["_struct",[[["m_name",20,-1]]]],["_blob",[[0,6]]],["_struct",[[["m_name",71,-1]]]],["_struct",[[["m_name",71,-3],["m_type",6,-2],["m_data",20,-1]]]],["_struct",[[["m_type",6,-3],["m_name",71,-2],["m_data",34,-1]]]],["_array",[[0,5],10]],["_struct",[[["m_signature",75,-2],["m_toonHandle",20,-1]]]],["_struct",[[["m_gameFullyDownloaded",13,-14],["m_developmentCheatsEnabled",13,-13],["m_testCheatsEnabled",13,-12],["m_multiplayerCheatsEnabled",13,-11],["m_syncChecksummingEnabled",13,-10],["m_isMapToMapTransition",13,-9],["m_debugPauseEnabled",13,-8],["m_useGalaxyAsserts",13,-7],["m_platformMac",13,-6],["m_cameraFollow",13,-5],["m_baseBuildNum",6,-4],["m_buildNum",6,-3],["m_versionFlags",6,-2],["m_hotkeyProfile",46,-1]]]],["_struct",[[]]],["_int",[[0,16]]],["_struct",[[["x",79,-2],["y",79,-1]]]],["_struct",[[["m_which",12,-2],["m_target",80,-1]]]],["_struct",[[["m_fileName",30,-5],["m_automatic",13,-4],["m_overwrite",13,-3],["m_name",9,-2],["m_description",29,-1]]]],["_int",[[1,32]]],["_struct",[[["m_sequence",83,-1]]]],["_null",[]],["_int",[[0,20]]],["_int",[[-2147483648,32]]],["_struct",[[["x",86,-3],["y",86,-2],["z",87,-1]]]],["_struct",[[["m_targetUnitFlags",79,-7],["m_timer",10,-6],["m_tag",6,-5],["m_snapshotUnitLink",79,-4],["m_snapshotControlPlayerId",59,-3],["m_snapshotUpkeepPlayerId",59,-2],["m_snapshotPoint",88,-1]]]],["_choice",[[0,2],{"0":["None",85],"1":["TargetPoint",88],"2":["TargetUnit",89]}]],["_struct",[[["m_target",90,-4],["m_time",87,-3],["m_verb",29,-2],["m_arguments",29,-1]]]],["_struct",[[["m_data",91,-1]]]],["_int",[[0,25]]],["_struct",[[["m_abilLink",79,-3],["m_abilCmdIndex",2,-2],["m_abilCmdData",25,-1]]]],["_optional",[94]],["_choice",[[0,2],{"0":["None",85],"1":["TargetPoint",88],"2":["TargetUnit",89],"3":["Data",6]}]],["_struct",[[["m_cmdFlags",93,-6],["m_abil",95,-5],["m_data",96,-4],["m_sequence",83,-3],["m_otherUnit",43,-2],["m_unitGroup",43,-1]]]],["_int",[[0,9]]],["_bitarray",[[0,9]]],["_array",[[0,9],98]],["_choice",[[0,2],{"0":["None",85],"1":["Mask",99],"2":["OneIndices",100],"3":["ZeroIndices",100]}]],["_struct",[[["m_unitLink",79,-4],["m_subgroupPriority",10,-3],["m_intraSubgroupPriority",10,-2],["m_count",98,-1]]]],["_array",[[0,9],102]],["_struct",[[["m_subgroupIndex",98,-4],["m_removeMask",101,-3],["m_addSubgroups",103,-2],["m_addUnitTags",64,-1]]]],["_struct",[[["m_controlGroupId",1,-2],["m_delta",104,-1]]]],["_struct",[[["m_controlGroupIndex",1,-3],["m_controlGroupUpdate",12,-2],["m_mask",101,-1]]]],["_struct",[[["m_count",98,-6],["m_subgroupCount",98,-5],["m_activeSubgroupIndex",98,-4],["m_unitTagsChecksum",6,-3],["m_subgroupIndicesChecksum",6,-2],["m_subgroupsChecksum",6,-1]]]],["_struct",[[["m_controlGroupId",1,-2],["m_selectionSyncData",107,-1]]]],["_struct",[[["m_chatMessage",29,-1]]]],["_struct",[[["m_speed",12,-1]]]],["_int",[[-128,8]]],["_struct",[[["m_delta",111,-1]]]],["_struct",[[["x",87,-2],["y",87,-1]]]],["_struct",[[["m_point",113,-4],["m_unit",6,-3],["m_pingedMinimap",13,-2],["m_option",87,-1]]]],["_struct",[[["m_verb",29,-2],["m_arguments",29,-1]]]],["_struct",[[["m_alliance",6,-2],["m_control",6,-1]]]],["_struct",[[["m_unitTag",6,-1]]]],["_struct",[[["m_unitTag",6,-2],["m_flags",10,-1]]]],["_struct",[[["m_conversationId",87,-2],["m_replyId",87,-1]]]],["_optional",[20]],["_struct",[[["m_gameUserId",1,-6],["m_observe",24,-5],["m_name",9,-4],["m_toonHandle",120,-3],["m_clanTag",41,-2],["m_clanLogo",42,-1]]]],["_array",[[0,5],121]],["_int",[[0,1]]],["_struct",[[["m_userInfos",122,-2],["m_method",123,-1]]]],["_choice",[[0,3],{"0":["None",85],"1":["Checked",13],"2":["ValueChanged",6],"3":["SelectionChanged",87],"4":["TextChanged",30],"5":["MouseButton",6]}]],["_struct",[[["m_controlId",87,-3],["m_eventType",87,-2],["m_eventData",125,-1]]]],["_struct",[[["m_soundHash",6,-2],["m_length",6,-1]]]],["_array",[[0,7],6]],["_struct",[[["m_soundHash",128,-2],["m_length",128,-1]]]],["_struct",[[["m_syncInfo",129,-1]]]],["_struct",[[["m_queryId",79,-3],["m_lengthMs",6,-2],["m_finishGameLoop",6,-1]]]],["_struct",[[["m_queryId",79,-2],["m_lengthMs",6,-1]]]],["_struct",[[["m_animWaitQueryId",79,-1]]]],["_struct",[[["m_sound",6,-1]]]],["_struct",[[["m_transmissionId",87,-2],["m_thread",6,-1]]]],["_struct",[[["m_transmissionId",87,-1]]]],["_optional",[80]],["_optional",[79]],["_optional",[111]],["_struct",[[["m_target",137,-6],["m_distance",138,-5],["m_pitch",138,-4],["m_yaw",138,-3],["m_reason",139,-2],["m_follow",13,-1]]]],["_struct",[[["m_skipType",123,-1]]]],["_int",[[0,11]]],["_struct",[[["x",142,-2],["y",142,-1]]]],["_struct",[[["m_button",6,-5],["m_down",13,-4],["m_posUI",143,-3],["m_posWorld",88,-2],["m_flags",111,-1]]]],["_struct",[[["m_posUI",143,-3],["m_posWorld",88,-2],["m_flags",111,-1]]]],["_struct",[[["m_achievementLink",79,-1]]]],["_struct",[[["m_hotkey",6,-2],["m_down",13,-1]]]],["_struct",[[["m_abilLink",79,-3],["m_abilCmdIndex",2,-2],["m_state",111,-1]]]],["_struct",[[["m_soundtrack",6,-1]]]],["_struct",[[["m_key",111,-2],["m_flags",111,-1]]]],["_struct",[[["m_error",87,-2],["m_abil",95,-1]]]],["_int",[[0,19]]],["_struct",[[["m_decrementMs",152,-1]]]],["_struct",[[["m_portraitId",87,-1]]]],["_struct",[[["m_functionName",20,-1]]]],["_struct",[[["m_result",87,-1]]]],["_struct",[[["m_gameMenuItemIndex",87,-1]]]],["_int",[[-32768,16]]],["_struct",[[["m_wheelSpin",158,-2],["m_flags",111,-1]]]],["_struct",[[["m_button",79,-1]]]],["_struct",[[["m_cutsceneId",87,-2],["m_bookmarkName",20,-1]]]],["_struct",[[["m_cutsceneId",87,-1]]]],["_struct",[[["m_cutsceneId",87,-3],["m_conversationLine",20,-2],["m_altConversationLine",20,-1]]]],["_struct",[[["m_cutsceneId",87,-2],["m_conversationLine",20,-1]]]],["_struct",[[["m_leaveReason",1,-1]]]],["_struct",[[["m_observe",24,-7],["m_name",9,-6],["m_toonHandle",120,-5],["m_clanTag",41,-4],["m_clanLogo",42,-3],["m_hijack",13,-2],["m_hijackCloneGameUserId",59,-1]]]],["_optional",[83]],["_struct",[[["m_state",24,-2],["m_sequence",167,-1]]]],["_struct",[[["m_sequence",167,-2],["m_target",88,-1]]]],["_struct",[[["m_sequence",167,-2],["m_target",89,-1]]]],["_struct",[[["m_catalog",10,-4],["m_entry",79,-3],["m_field",9,-2],["m_value",9,-1]]]],["_struct",[[["m_index",6,-1]]]],["_struct",[[["m_shown",13,-1]]]],["_struct",[[["m_recipient",12,-2],["m_string",30,-1]]]],["_struct",[[["m_recipient",12,-2],["m_point",113,-1]]]],["_struct",[[["m_progress",87,-1]]]],["_struct",[[["m_status",24,-1]]]],["_struct",[[["m_abilLink",79,-3],["m_abilCmdIndex",2,-2],["m_buttonLink",79,-1]]]],["_struct",[[["m_behaviorLink",79,-2],["m_buttonLink",79,-1]]]],["_choice",[[0,2],{"0":["None",85],"1":["Ability",178],"2":["Behavior",179],"3":["Vitals",158]}]],["_struct",[[["m_announcement",180,-3],["m_otherUnitTag",6,-2],["m_unitTag",6,-1]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_unitTypeName",29,2],["m_controlPlayerId",1,3],["m_upkeepPlayerId",1,4],["m_x",10,5],["m_y",10,6]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_x",10,2],["m_y",10,3]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_killerPlayerId",59,2],["m_x",10,3],["m_y",10,4],["m_killerUnitTagIndex",43,5],["m_killerUnitTagRecycle",43,6]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_controlPlayerId",1,2],["m_upkeepPlayerId",1,3]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1],["m_unitTypeName",29,2]]]],["_struct",[[["m_playerId",1,0],["m_upgradeTypeName",29,1],["m_count",87,2]]]],["_struct",[[["m_unitTagIndex",6,0],["m_unitTagRecycle",6,1]]]],["_array",[[0,10],87]],["_struct",[[["m_firstUnitIndex",6,0],["m_items",189,1]]]],["_struct",[[["m_playerId",1,0],["m_type",6,1],["m_userId",43,2],["m_slotId",43,3]]]],["_struct",[[["m_key",29,0]]]],["_struct",[[["__parent",192,0],["m_value",29,1]]]],["_array",[[0,6],193]],["_optional",[194]],["_struct",[[["__parent",192,0],["m_value",87,1]]]],["_array",[[0,6],196]],["_optional",[197]],["_struct",[[["m_eventName",29,0],["m_stringData",195,1],["m_intData",198,2],["m_fixedData",198,3]]]],["_struct",[[["m_value",6,0],["m_time",6,1]]]],["_array",[[0,6],200]],["_array",[[0,5],201]],["_struct",[[["m_name",29,0],["m_values",202,1]]]],["_array",[[0,21],203]],["_struct",[[["m_instanceList",204,0]]]]];

exports.GAME_EVENT = [0, {"5":[78,"NNet.Game.SUserFinishedLoadingSyncEvent"],"7":[77,"NNet.Game.SUserOptionsEvent"],"9":[70,"NNet.Game.SBankFileEvent"],"10":[72,"NNet.Game.SBankSectionEvent"],"11":[73,"NNet.Game.SBankKeyEvent"],"12":[74,"NNet.Game.SBankValueEvent"],"13":[76,"NNet.Game.SBankSignatureEvent"],"14":[81,"NNet.Game.SCameraSaveEvent"],"21":[82,"NNet.Game.SSaveGameEvent"],"22":[78,"NNet.Game.SSaveGameDoneEvent"],"23":[78,"NNet.Game.SLoadGameDoneEvent"],"25":[84,"NNet.Game.SCommandManagerResetEvent"],"26":[92,"NNet.Game.SGameCheatEvent"],"27":[97,"NNet.Game.SCmdEvent"],"28":[105,"NNet.Game.SSelectionDeltaEvent"],"29":[106,"NNet.Game.SControlGroupUpdateEvent"],"30":[108,"NNet.Game.SSelectionSyncCheckEvent"],"32":[109,"NNet.Game.STriggerChatMessageEvent"],"34":[110,"NNet.Game.SSetAbsoluteGameSpeedEvent"],"35":[112,"NNet.Game.SAddAbsoluteGameSpeedEvent"],"36":[114,"NNet.Game.STriggerPingEvent"],"37":[115,"NNet.Game.SBroadcastCheatEvent"],"38":[116,"NNet.Game.SAllianceEvent"],"39":[117,"NNet.Game.SUnitClickEvent"],"40":[118,"NNet.Game.SUnitHighlightEvent"],"41":[119,"NNet.Game.STriggerReplySelectedEvent"],"43":[124,"NNet.Game.SHijackReplayGameEvent"],"44":[78,"NNet.Game.STriggerSkippedEvent"],"45":[127,"NNet.Game.STriggerSoundLengthQueryEvent"],"46":[134,"NNet.Game.STriggerSoundOffsetEvent"],"47":[135,"NNet.Game.STriggerTransmissionOffsetEvent"],"48":[136,"NNet.Game.STriggerTransmissionCompleteEvent"],"49":[140,"NNet.Game.SCameraUpdateEvent"],"50":[78,"NNet.Game.STriggerAbortMissionEvent"],"55":[126,"NNet.Game.STriggerDialogControlEvent"],"56":[130,"NNet.Game.STriggerSoundLengthSyncEvent"],"57":[141,"NNet.Game.STriggerConversationSkippedEvent"],"58":[144,"NNet.Game.STriggerMouseClickedEvent"],"59":[145,"NNet.Game.STriggerMouseMovedEvent"],"60":[146,"NNet.Game.SAchievementAwardedEvent"],"61":[147,"NNet.Game.STriggerHotkeyPressedEvent"],"62":[148,"NNet.Game.STriggerTargetModeUpdateEvent"],"64":[149,"NNet.Game.STriggerSoundtrackDoneEvent"],"66":[150,"NNet.Game.STriggerKeyPressedEvent"],"67":[155,"NNet.Game.STriggerMovieFunctionEvent"],"76":[151,"NNet.Game.STriggerCommandErrorEvent"],"86":[78,"NNet.Game.STriggerMovieStartedEvent"],"87":[78,"NNet.Game.STriggerMovieFinishedEvent"],"88":[153,"NNet.Game.SDecrementGameTimeRemainingEvent"],"89":[154,"NNet.Game.STriggerPortraitLoadedEvent"],"90":[156,"NNet.Game.STriggerCustomDialogDismissedEvent"],"91":[157,"NNet.Game.STriggerGameMenuItemSelectedEvent"],"92":[159,"NNet.Game.STriggerMouseWheelEvent"],"95":[160,"NNet.Game.STriggerButtonPressedEvent"],"96":[78,"NNet.Game.STriggerGameCreditsFinishedEvent"],"97":[161,"NNet.Game.STriggerCutsceneBookmarkFiredEvent"],"98":[162,"NNet.Game.STriggerCutsceneEndSceneFiredEvent"],"99":[163,"NNet.Game.STriggerCutsceneConversationLineEvent"],"100":[164,"NNet.Game.STriggerCutsceneConversationLineMissingEvent"],"101":[165,"NNet.Game.SGameUserLeaveEvent"],"102":[166,"NNet.Game.SGameUserJoinEvent"],"103":[168,"NNet.Game.SCommandManagerStateEvent"],"104":[169,"NNet.Game.SCmdUpdateTargetPointEvent"],"105":[170,"NNet.Game.SCmdUpdateTargetUnitEvent"],"106":[131,"NNet.Game.STriggerAnimLengthQueryByNameEvent"],"107":[132,"NNet.Game.STriggerAnimLengthQueryByPropsEvent"],"108":[133,"NNet.Game.STriggerAnimOffsetEvent"],"109":[171,"NNet.Game.SCatalogModifyEvent"],"110":[172,"NNet.Game.SHeroTalentTreeSelectedEvent"],"111":[78,"NNet.Game.STriggerProfilerLoggingFinishedEvent"],"112":[173,"NNet.Game.SHeroTalentTreeSelectionPanelToggledEvent"]}];
exports.MESSAGE_EVENT = [1, {"0":[174,"NNet.Game.SChatMessage"],"1":[175,"NNet.Game.SPingMessage"],"2":[176,"NNet.Game.SLoadingProgressMessage"],"3":[78,"NNet.Game.SServerPingMessage"],"4":[177,"NNet.Game.SReconnectNotifyMessage"],"5":[181,"NNet.Game.SPlayerAnnounceMessage"]}];
exports.TRACKER_EVENT = [2, {"1":[182,"NNet.Replay.Tracker.SUnitBornEvent"],"2":[184,"NNet.Replay.Tracker.SUnitDiedEvent"],"3":[185,"NNet.Replay.Tracker.SUnitOwnerChangeEvent"],"4":[186,"NNet.Replay.Tracker.SUnitTypeChangeEvent"],"5":[187,"NNet.Replay.Tracker.SUpgradeEvent"],"6":[182,"NNet.Replay.Tracker.SUnitInitEvent"],"7":[188,"NNet.Replay.Tracker.SUnitDoneEvent"],"8":[190,"NNet.Replay.Tracker.SUnitPositionsEvent"],"9":[191,"NNet.Replay.Tracker.SPlayerSetupEvent"],"10":[199,"NNet.Replay.Tracker.SStatGameEvent"],"11":[205,"NNet.Replay.Tracker.SScoreResultEvent"],"12":[183,"NNet.Replay.Tracker.SUnitRevivedEvent"]}];

exports.REPLAY = [7, 8, 18, 40, 69];
