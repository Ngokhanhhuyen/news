import classNames from 'classnames/bind';

import styles from './CategoryItem.module.scss';

import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function CategoryItem(props) {
    const navi = useNavigate();

    return (
        <>
            <div
                key={props.id}
                className={cx('item-news--list')}
                onClick={(e) => {
                    e.preventDefault();
                    navi(`/detail/${props.id}`);
                }}
            >
                <div className={cx('image-item-news-list')}>
                    <img src={`${props.nameImage}`} alt="" />
                </div>
                <div className={cx('title-item-news-list')}>{props.title}</div>
            </div>
        </>
    );
}

export default CategoryItem;
