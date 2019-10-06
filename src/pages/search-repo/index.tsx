import React, { useState } from 'react';
import RepositoryList from "./parts/repo-list";
import Layout from "../../components/common/layout/layout";
import styles from "./styles.module.scss";

import { DebounceInput } from 'react-debounce-input';

const SearchRepo = function () {

  const [search, setSearch] = useState("");

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <Layout>
      <div>
        <div style={{ textAlign: "center" }}>
          <h4 className={styles.h4}> Search Github Repo</h4>
          <DebounceInput className={styles.debounceInput}
            placeholder="Search"
            minLength={2}
            debounceTimeout={500}
            onChange={handleSearch}
          />
        </div>

        <RepositoryList searchKey={search} />
      </div>
    </Layout>
  )
}

export default SearchRepo;
