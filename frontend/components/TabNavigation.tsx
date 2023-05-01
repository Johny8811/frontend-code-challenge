import { clsx } from 'clsx';
import { ActiveTabState } from '@/pages';

import styles from '@/components/TabNavigation.module.css'

type Props = {
    activeTab: ActiveTabState
    setActiveTab: (param: ActiveTabState) => void
}

export const TabNavigation = ({ activeTab, setActiveTab }: Props) => {
    return (
        <div className={styles.tab}>
            <button
                className={clsx({ [styles.active]: activeTab === 'all' })}
                onClick={() => setActiveTab('all')}
            >
                All
            </button>
            <button
                className={clsx({ [styles.active]: activeTab === 'favorites' })}
                onClick={() => setActiveTab('favorites')}
            >
                Favorites
            </button>
        </div>
    )
}
