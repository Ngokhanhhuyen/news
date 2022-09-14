import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SearchItem = ({ data }) => {
    return (
        <div className={cx('wapper')}>
            <Link className={cx('box-item')} to={`/detail/${data.id}`}>
                <span className={cx('result-item')}>
                    <img
                        src={`http://localhost:8081/image/${data.nameImage}`}
                        alt=""
                        className={cx('img-product')}
                    />
                    <h4>{data.title}</h4>
                </span>
            </Link>
        </div>
    );
};

export default SearchItem;
