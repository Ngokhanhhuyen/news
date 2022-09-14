import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './CardNewsItRight.module.scss';
import { NewsContext } from '../../../Store/Context/NewsContext';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const CardNewsItRight = () => {
    const navigate = useNavigate();
    const {
        newsState: { news },
    } = useContext(NewsContext);
    const listIT = news.filter((ITEM) => ITEM[6] === 'Khoa học công nghệ');

    const maxIdRe = listIT.reverse();

    return (
        <div className={cx('box-right')}>
            {maxIdRe.slice(1, 4).map((item, index) => {
                return (
                    <div
                        className={cx('box-right__item-news')}
                        key={index}
                        onClick={(e) => {
                            navigate(`/detail/${item[0]}`);
                        }}
                    >
                        <img
                            className={cx('box-right__image-news')}
                            src={`http://localhost:8081/image/${item[7]}`}
                            alt=""
                        />
                        <div className={cx('box-right__title')}>
                            <p className={cx('type-news')}>{item[6]}</p>
                            <p className={cx('title-news')}>{item[1]}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardNewsItRight;
