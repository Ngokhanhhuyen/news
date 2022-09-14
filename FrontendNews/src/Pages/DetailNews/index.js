import React, { useContext, useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { NewsContext } from '../../Store/Context/NewsContext.js';
import CardItem from '../../Components/Home/CardItem';
import HTMLReactParser from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function DetailNews() {
    const navi = useNavigate();
    const {
        newsState: { news },
        getNewsById,
    } = useContext(NewsContext);
    let { id } = useParams();
    const [newsRe, setNewsRe] = useState(null);

    useEffect(() => {
        async function getNews() {
            const result = await getNewsById(id);
            setNewsRe(result);
        }
        getNews();
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('type-news')}>
                    <Link className={cx('type-name-link')} to="#">
                        {newsRe && newsRe[6]}
                    </Link>
                </div>
                <div className={cx('Title-news')}>
                    <div className={cx('image-news')}>
                        <img
                            src={`http://localhost:8081/image/${
                                newsRe && newsRe[7]
                            }`}
                            alt=""
                        />
                    </div>
                    <h1>{newsRe && newsRe[1]}</h1>
                </div>
                <div className={cx('content-news')}>
                    {newsRe && HTMLReactParser(newsRe[3])}
                </div>
                <div className={cx('list-item')}>
                    {news.slice(0, 3).map((item, index) => (
                        <CardItem
                            key={index}
                            nameImage={`http://localhost:8081/image/${item[7]}`}
                            author={item[9]}
                            countlike={item[4]}
                            countview={item[5]}
                            title={item[1]}
                            id={item[0]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailNews;
