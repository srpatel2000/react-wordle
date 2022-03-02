import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  CORRECT_WORD_MESSAGE,
  WIN_MESSAGES
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={isGameWon ? WIN_MESSAGES : CORRECT_WORD_MESSAGE('Jisoo')}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <img src={require('./jisoo_rocks_box.jpeg')} />
    </BaseModal>
  )

  

  // if (isGameLost) {
  //   return (
  //     <BaseModal
  //       title={CORRECT_WORD_MESSAGE('Jisoo')}
  //       isOpen={isOpen}
  //       handleClose={handleClose}
  //     >
  //     </BaseModal>
  //   )
  // }
  
  // if (isGameWon) {
  //   return (
  //     <BaseModal
  //       title={WIN_MESSAGES}
  //       isOpen={isOpen}
  //       handleClose={handleClose}
  //     >
  //     </BaseModal>
  //   )  
  // }
}
