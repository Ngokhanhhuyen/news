import classNames from 'classnames/bind';

import styles from './Search.module.scss';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../Components/Popper';

import { NewsContext } from '../../Store/Context/NewsContext';
import { useContext, useEffect, useState } from 'react';
import SearchItem from '../../Components/SearchItem';

const cx = classNames.bind(styles);

function Search() {
    const { getNewsByTitle } = useContext(NewsContext);
    const [valueSearch, setValueSearch] = useState();
    const [resultSearch, setResultSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        async function getResult() {
            const result = await getNewsByTitle(valueSearch);
            setResultSearch(result);
        }
        getResult();
    }, [valueSearch]);

    const handleHideResult = () => {
        setValueSearch('');
        setShowResult(false);
    };

    return (
        <div className={cx('search')}>
            <Tippy
                interactive
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Kết quả tìm kiếm
                            </h4>
                            {resultSearch.length > 0 ? (
                                resultSearch.map((result) => (
                                    <SearchItem
                                        key={result.id}
                                        data={result}
                                        searchValue={valueSearch}
                                    />
                                ))
                            ) : (
                                <></>
                            )}
                        </PopperWrapper>
                    </div>
                )}
                visible={showResult && resultSearch.length > 0}
                onClickOutside={handleHideResult}
            >
                <Tippy content="Nhấn để tìm kiếm">
                    <div className={cx('search')}>
                        <input
                            className={cx('box-input-search')}
                            type="text"
                            placeholder="Nội dung tìm kiếm"
                            value={valueSearch}
                            onChange={(e) => {
                                e.preventDefault();
                                setValueSearch(e.target.value);
                            }}
                            onFocus={(e) => setShowResult(true)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={cx('icon-search')}
                            fill="none"
                            viewBox="0 0 27 27"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </Tippy>
            </Tippy>
        </div>
    );
}

export default Search;
