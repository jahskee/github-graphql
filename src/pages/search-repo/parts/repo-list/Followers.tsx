
import React, { Fragment } from "react";
import { useQuery } from '@apollo/react-hooks';
import getFollowersQuery from "../queries/getFollowersQuery";

const Followers = (props: any) => {
  const { loading, error, data } = useQuery(getFollowersQuery("MDQ6VXNlcjEzODg5ODE5"));
  if (loading) {
    return (<div>Loading followers...</div>)
  }

  if (error) {
    return (<div>Error loading followers...</div>)
  }

  if (data) {
    const followers = data.node.followers.nodes;
    console.log(followers)
    return (
      <Fragment>
        watadf
        {followers.map((node: any) => {
          if (node.name) {
            return (<span style={{ paddingRight: 15 }}>{node.name},</span>)
          }
        })}
      </Fragment>
    )
  }
}

export default Followers;