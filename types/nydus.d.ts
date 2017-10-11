type NYDUS_PROTOCOL = {
  VERSION: number;
  TYPE_INFO: Array<[string, any[]]>;
  GAME_EVENT: { [key: string]: any[] }
  REPLAY: number[];
};

type NYDUS_ATTRIBUTES = { [key: string]:number };
