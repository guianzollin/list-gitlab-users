import DataSourceAPI from "@/classes/DataSourceAPI"

import axios from 'axios'

class UserDataSource extends DataSourceAPI {

  async search(term, isLoadingMore = false) {

    this.hasMore = true
    axios({
      url: 'https://gitlab.com/api/graphql',
      method: 'post',
      data: {
        query: `{
          users(search: "${term}", first: 10) {
            edges {
              node {
                avatarUrl
                username
                name
                webUrl
              }
            }
          }
        }`
      }
    }).then((result) => {
      this.hasMore = false
      this.items = result.data.data.users.edges
    })
  }

}

export default UserDataSource
