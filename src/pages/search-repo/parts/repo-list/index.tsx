import React, { useState, Fragment } from "react"
import loadingGif from "./images/loading.gif";
import { useQuery } from '@apollo/react-hooks';
import getRepoListQuery from '../queries/getRepoListQuery';
import styles from "./styles.module.scss";
import Followers from "./Followers";


const RepositoryList = function ({ searchKey }: any) {
  if (!searchKey) return null;
  

  const handleClick = (param: any) => {
    return () => {
      setRepoInfo(param);
    }
  }

  const { loading, error, data } = useQuery(getRepoListQuery(searchKey));
  const [ repoInfo, setRepoInfo ] = useState({});

  if (error) return (
    <div>
      Repo Listing - {error}
    </div>
  )

  if (loading) return (
    <div style={{ width: "100%", margin: "0 auto" }}>;
          <img src={loadingGif} alt="loading..." style={{ display: "block", margin: "0 auto", width: 50, height: 50 }} />
    </div>
  );

  const repositories = data.search.repos;
  const resultCount = data.search.repositoryCount;

  return (
    <div className={styles.container}>
      <div style={{ textAlign: "center", marginTop: 10, marginBottom: 20 }}>Found {resultCount} repos</div>
      <div style={{marginTop: 50}}>Pages:  1  |  2  |  3  |</div>

      <div style={{ display: "flex", flexDirection: "row" }}>

        <div style={{ width: "49%", padding: 20 }}>
          <div className={styles.headerField}>
            <div className={styles.col1}> <h4>Repository</h4></div>
            <div className={styles.col2}> <h4>Owner</h4></div>
          </div>
          {
            repositories.map((repo: any, i: any) => {
              const repoName = repo.repo.name;
              const owner = repo.repo.owner.login;
             
              const ownerId = repo.repo.owner.id;

              let url = "n/a";
              try {url = repo.repo.url } catch(e) { /* noop */ }

              let description = "n/a";
              try {description = repo.repo.description; } catch(e) { /* noop */ }

              let avatarUrl="https://i.imgur.com/RGWomSA.png";
              try {avatarUrl=repo.repo.owner.avatarUrl } catch(e) { /* noop */ }
              
              let language="n/a";
              try {language=repo.repo.primaryLanguage.name;} catch(e) { /* noop */ }

              const param = {
                owner, ownerId, repoName, avatarUrl, url, description, language
              }
              return (
                <div className={styles.field} onClick={handleClick(param)} key={i}>
                  <div className={styles.col1} > {repoName}</div>
                  <div className={styles.col2}> {owner}</div>
                </div>
              )
            })
          }
        </div>

          {/* ==== Dispolay Repo Information ====== */}
          <div className={styles.rightBox}>
          {repoInfo.avatarUrl && 
            <Fragment>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              
                  <img src={repoInfo.avatarUrl} alt="RepoOwner" mode='fit' style={{ width: 150, height: 150, textAlign: "center" }} />
         
            </div>
            <div className={styles.infoRow}>
              <span className={styles.col1}>Developer</span>
              <span className={styles.col2}>{repoInfo.owner}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.col1}>Repo Name</span>
              <span className={styles.col2}>{repoInfo.repoName}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.col1}>Repo URL</span>
              <span className={styles.col2}>{repoInfo.url}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.col1}>Language</span>
              <span className={styles.col2}>{repoInfo.language}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.col1}>Description</span>
              <span className={styles.col2}>{repoInfo.description}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.col1}>Followers</span>
              <span className={styles.col2}>
                <Followers ownerId={repoInfo.ownerId}/>
              </span>
            </div>
            </Fragment >
            }
            
          </div>
         
      </div>
      <div style={{marginTop: 50}}>Pages:   1  |  2  |  3  |</div>
    </div >
  )
}

export default RepositoryList;