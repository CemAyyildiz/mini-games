import GameGrid from './components/game-grid';
import GameStats from './components/game-stats';
import GameControls from './components/game-controls';
import GameOverPanel from './components/game-over-panel';
import { useMakeTen } from './hooks/use-make-ten';

export default function MakeTen() {
  const {
    grid,
    selectedCells,
    score,
    combo,
    timeLeft,
    isPlaying,
    gameOver,
    isDragging,
    selectCell,
    startDrag,
    endDrag,
    startGame,
    resetGame,
  } = useMakeTen();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
          [ DRAG TO SELECT NUMBERS THAT SUM TO 10 ]
        </p>
      </div>

      <GameStats score={score} combo={combo} timeLeft={timeLeft} />

      <GameGrid
        grid={grid}
        selectedCells={selectedCells}
        onCellEnter={selectCell}
        onMouseDown={startDrag}
        onMouseUp={endDrag}
        isPlaying={isPlaying}
        isDragging={isDragging}
      />

      <GameControls
        isPlaying={isPlaying}
        gameOver={gameOver}
        onStart={startGame}
        onReset={resetGame}
      />

      <GameOverPanel score={score} gameOver={gameOver} />
    </div>
  );
}
