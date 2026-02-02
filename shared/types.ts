export type RoomId = string;
export type PlayerId = string;
export type TeamId = string;
export type CardId = string;

export type Player = {
    playerId: PlayerId;
    name: string;
    teamId: TeamId;
};

export type Team = {
    teamId: TeamId;
    name: string;
    playerOrder: PlayerId[];
};

export type ServerCard = {
    cardId: CardId;
    title: string;
    desc: string;
    pointValue: number;
    setSourceId?: string; 
}

export type PublicCard = {};

// decided before game starts
export type GameSettings = {
    secondsPerTurn: number;
    shuffleBetweenRounds: boolean; 
    cardsPerPlayer: number; // number of cards each player adds
}

// payload given to start game
export type StartGamePayload = {
    roomId: RoomId;
    playerS: Player[];
    teams: Team[];
    settings: GameSettings;
    deck: ServerCard[]
}

export type GamePhase = "lobby" | "in_round" | "round_end" | "game_end"
export type TurnStatus = "idle" | "active" | "ending"

// current turn information
export type TurnState = {
    status: TurnStatus;
    turnNumber: number;
    activeTeamId: TeamId | null;
    activeCluegiverId: PlayerId | null;
    endsAt: number | null;
    activeCardId: CardId | null;
};

// records which team guessed which card on what turn
export type GuessEvent = {
    cardId: CardId;
    teamId: TeamId;
    round: number;
    turnNumber: number;
};

// records which team skipped which card on which turn
export type SkipEvent = {
    cardId: CardId;
    round: number;
    turnNumber: number;
}

// describes the game at any moment (server-side)
export type GameState = {
    roomId: RoomId;
    phase: GamePhase;
    round: number;

    players: Player[]
    teams: Team[];
    settings: GameSettings;

    teamTurnIndex: number;
    cluegiverIndexByTeam: Record<TeamId, number>;

    turn: TurnState;

    allCards: Record<CardId, ServerCard>
    drawPile: CardId[]

    guessedThisRound: GuessEvent[];
    skippedThisRound: SkipEvent[];

    scoreByTeam: Record<TeamId, number>;
};

// client -> server intents
// the only actions that the client is allowed to request
export type ClientIntent =
  | { type: "START_GAME"; payload: StartGamePayload } // host only
  | { type: "START_TURN" }                            // host only OR auto
  | { type: "MARK_CORRECT"; cardId: CardId }          // cluegiver only
  | { type: "MARK_SKIP"; cardId: CardId };            // cluegiver only

// server -> client events
// the outputs that the server sends back
export type ServerEvent =
  | { type: "STATE_UPDATE"; state: PublicGameState }
  | { type: "CARD_REVEALED"; cardId: CardId; text: string }
  | { type: "ERROR"; message: string; code?: string };

// public view of the cards
export type PublicGameState = Omit<GameState, "allCards"> & {
  allCards: Record<CardId, PublicCard>; // redacted
};