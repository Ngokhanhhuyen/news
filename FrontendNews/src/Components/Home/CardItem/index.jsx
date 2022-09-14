import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';

import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function CardItem(props) {
    const navi = useNavigate();
    return (
        <>
            <div
                className={cx('item-news')}
                onClick={(e) => {
                    navi(`/detail/${props.id}`);
                }}
            >
                <img
                    className={cx('image-news')}
                    src={`${props.nameImage}`}
                    alt=""
                />
                <div className={cx('Detail')}>
                    <div className={cx('infor-author')}>
                        <div className={cx('nameAuthor')}>@{props.author}</div>
                        <div className={cx('amount')}>
                            <img src="./image/coolicon.svg" alt="" />
                            <span className={cx('amount-like')}>
                                {props.countlike}
                            </span>
                            <div className={cx('amount-view')}>
                                {props.countview} PSL
                            </div>
                        </div>
                    </div>

                    <div className={cx('title')}>{props.title}</div>
                </div>
            </div>
        </>
    );
}

export default CardItem;
