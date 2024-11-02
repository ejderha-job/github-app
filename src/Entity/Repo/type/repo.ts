export interface Repository {
    name: string,
    stargazerCount: number,
    url: string,
    defaultBranchRef: {
        target: {
            committedDate: string
        }
    }
}