import React from "react";
import BlogBlock from "../../components/blog-block/blog-block";
import Footer from "../../components/footer/footer";
import InfoBlock from "../../components/info-block/info-block";
import MainBlock from "../../components/main-block/main-block";
import SaleBlock from "../../components/sale-block/sale-block";
import TestBlock from "../../components/test-block/test-block";
import Questions from "../../MOCK_DATA/question";

Questions()

const HomePage = () => {
    return (
        <div>
            <MainBlock/>
            <InfoBlock/>
            <SaleBlock/>
            <BlogBlock/>
            <TestBlock/>
            <Footer />
        </div>
    )
}

export default HomePage;


