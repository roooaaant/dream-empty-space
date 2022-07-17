import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
    // 카테고리가 선택되지 않았으면 기본값 all 사용
    //const category = match.params.category || 'all';
    const { category } = useParams();

    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;