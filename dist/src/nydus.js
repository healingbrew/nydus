"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mpyqjs_1 = require("mpyqjs");
const path_1 = require("path");
const HERO = require("../def/heroes");
const S2 = require("../def/s2");
const heroprotoc_1 = require("./tool/heroprotoc");
var GameType;
(function (GameType) {
    GameType[GameType["HERO"] = 0] = "HERO";
    GameType[GameType["S2"] = 1] = "S2";
    GameType[GameType["ANY"] = 4096] = "ANY";
})(GameType = exports.GameType || (exports.GameType = {}));
class Replay {
    constructor(file, protocol, attrib) {
        this.mpq = new mpyqjs_1.MPQArchive(file);
    }
}
exports.Replay = Replay;
class Parser {
    constructor(decl) {
        this.defDir = path_1.resolve(__dirname, "../def/");
        this.attrFile = path_1.resolve(__dirname, "../def/");
        if (typeof decl === "string") {
            this.defDir = decl;
            this.gameType = GameType.ANY;
        }
        else {
            this.gameType = decl;
            if (this.gameType === GameType.HERO) {
                this.defDir = path_1.resolve(this.defDir, "heroes");
                this.attrFile = path_1.resolve(this.defDir, "heroes.js");
            }
            else if (this.gameType === GameType.S2) {
                this.defDir = path_1.resolve(this.defDir, "s2");
                this.attrFile = path_1.resolve(this.defDir, "s2.js");
            }
        }
    }
    setGameType(gameType) {
        this.gameType = gameType;
    }
    setDefinitionDirectory(defDir) {
        this.defDir = defDir;
    }
    setAttributeFile(attrFile) {
        this.attrFile = attrFile;
    }
    reload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.LATEST_PROTO = yield heroprotoc_1.Latest(this.defDir);
            if (this.LATEST_PROTO == null) {
                throw new Error("Missing base protocol info");
            }
            return;
        });
    }
    loadReplay(replayFile) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.LATEST_PROTO == null) {
                throw new Error("Missing base protocol info, call reload first.");
            }
            let attrib = {};
            if (this.gameType === GameType.HERO) {
                attrib = HERO.ATTRIBUTES;
            }
            else if (this.gameType === GameType.S2) {
                attrib = S2.ATTRIBUTES;
            }
            return new Replay(replayFile, this.LATEST_PROTO, attrib);
        });
    }
}
exports.Parser = Parser;
exports.default = { Parser };
//# sourceMappingURL=nydus.js.map