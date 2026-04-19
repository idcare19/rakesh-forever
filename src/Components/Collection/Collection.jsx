import React, { useState, useEffect } from "react";
import UseList from "./UseList";

export default function Collection() {
    const [arr, setArr] = useState([])
    useEffect(() => {
        if (typeof fetch !== "function") {
            return;
        }

        const request = fetch("/products.json");

        if (!request || typeof request.then !== "function") {
            return;
        }

        request
            .then(res => res.json())
            .then(pro => setArr(pro))
    }, [])

    // Category
    const [m, setM] = useState(false)
    const [f, setF] = useState(false)
    const [k, setK] = useState(false)

    // type
    const [t, setT] = useState(false)
    const [b, setB] = useState(false)
    const [w, setW] = useState(false)

    // Search
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(true);

    const result = arr.filter(i => (
        (m && i.category === "men") ||
        (f && i.category === "women") ||
        (k && i.category === "kids") ||
        (!m && !f && !k)


    )).filter((i) => (
        (t && i.type === "topwear") ||
        (b && i.type === "bottomwear") ||
        (w && i.type === "winterwear") ||
        (!t && !b && !w)
    )).filter(i =>
        i.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <>
            {showSearch && (
                <div className="search-container">
                    <div className="search-inner">
                        <div className="search-box">
                            <input type="text" placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                            <span className="search-icon"><i className="bi bi-search search-icon"></i></span>
                        </div>
                        <div className="clear-icon" onClick={() => {
                            setSearch("");
                            setShowSearch(false);
                        }}>
                            <i className="bi bi-x clear-icon"></i>
                        </div>
                    </div>
                </div>
            )}

            <div className="coll-product">
                <div className="coll-product-left">
                    <div className="filter">
                        <h2 className="filter-title">FILTERS</h2>
                        <div className="filter-box">
                            <h3>CATEGORIES</h3>
                            <label >
                                <input type="checkbox" name="" id="" onChange={() =>
                                    setM(!m)
                                } />Male
                            </label>
                            <label >
                                <input type="checkbox" name="" id="" onChange={() =>
                                    setF(!f)
                                } />Female
                            </label>
                            <label >
                                <input type="checkbox" name="" id="" onChange={() =>
                                    setK(!k)
                                } />Kids
                            </label>
                        </div>
                        <div className="filter-box">
                            <h3>TYPE</h3>
                            <label>
                                <input type="checkbox" name="" id="" onChange={() => setT(!t)} /> Topwear
                            </label>

                            <label>
                                <input type="checkbox" name="" id="" onChange={() => setB(!b)} /> Bottomwear
                            </label>

                            <label>
                                <input type="checkbox" name="" id="" onChange={() => setW(!w)} /> Winterwear
                            </label>
                        </div>
                    </div>
                </div>

                <div className="product-right">
                    <div className="coll-title">
                        <p className="title-text">ALL<span className="title-span">COLLECTION</span></p>
                        <div className="option">
                            <select name="" id=""   >
                                <option value="">Sort by: Relavent</option>
                                <option value="">Sort by: Low to High</option>
                                <option value="">Sort by: High to Low</option>

                            </select>
                        </div>

                    </div>

                    <div className="product-item">
                        {
                            result.map((item) => {
                                return (
                                    <UseList key={item.id} data={item} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}