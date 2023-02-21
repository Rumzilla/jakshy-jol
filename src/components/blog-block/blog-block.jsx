import React from "react";
import { useTranslation } from "react-i18next";

import "./blog-block.css";

const BlogBlock = () => {
    const {t} = useTranslation()
    return (
        <div className="container">
            <div className="blog-block">
                <h2 className="blog-header">{t("blog-header")}</h2>
                <div className="blog-card">
                    <div className="blog-text">
                    {t("blog-text")}
                    </div>
                    <div className="blog-img"></div>
                </div>
                <div className="blog-card">
                    <div className="blog-text">
                    {t("blog-text")}
                    </div>
                    <div className="blog-img"></div>
                </div>
                <div className="blog-card">
                    <div className="blog-text">
                    {t("blog-text")}
                    </div>
                    <div className="blog-img"></div>
                </div>
            </div>
        </div>
    )
}

export default BlogBlock;