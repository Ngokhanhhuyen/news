import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './CardNewsItLeft.module.scss';
import { useNavigate } from 'react-router-dom';

import { NewsContext } from '../../../Store/Context/NewsContext';

const cx = classNames.bind(styles);

const CardNewsItLeft = () => {
    const navigate = useNavigate();
    const {
        newsState: { news },
    } = useContext(NewsContext);
    const listIT = news.filter((ITEM) => ITEM[6] === 'Khoa học công nghệ');
    const maxId = Math.max(...listIT.map((user) => user[0]));

    return (
        <div className={cx('box-left')}>
            {listIT.map((item, index) => {
                if (item[0] === maxId) {
                    return (
                        <div
                            className={cx('box-left__item-news')}
                            key={index}
                            onClick={(e) => {
                                navigate(`/detail/${item[0]}`);
                            }}
                        >
                            <img
                                className={cx('box-left__image-news')}
                                src={`http://localhost:8081/image/${item[7]}`}
                                alt=""
                            />
                            <div className={cx('box-right__title')}>
                                <p className={cx('type-news')}>{item[6]}</p>
                                <p className={cx('title-news')}>{item[1]}</p>
                            </div>
                        </div>
                    );
                } else {
                    <></>;
                }
            })}
        </div>
    );
};

export default CardNewsItLeft;
