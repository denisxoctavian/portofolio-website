import { Owner } from "./owner";

export interface Project {
    id: string,
    nodeId: string;
    name: string;
    fullName: string;
    private: boolean;
    owner: Owner;
    htmlUrl: string;
    description: string;
    fork: boolean;
    forksUrl: string;
    keysUrl: string;
    collaboratorsUrl: string;
    teamsUrl: string;
    hooksUrl: string;
    issueEvents: string;
    assigneesUrl: string;
    branchesUrl: string;
    tagsUrl: string;
    blobsUrl: string;
    gitTagsUrl: string;
    gitRefsUrl: string;
    treesUrl: string
    statusesUrl: string;
    languagesUrl: string;
    stargazersUrl: string;
    contributorsUrl: string;
    subscribersUrl: string;
    subscriptionUrl: string;
    commitsUrl: string;
    gitCommitsUrl: string;
    commentsUrl: string;
    issueCommentUrl: string;
    contentsUrl: string;
    compareUrl: string;
    mergesUrl: string;
    archiveUrl: string;
    downloadsUrl: string;
    issuesUrl: string
    pullsUrl: string;
    milestonesUrl: string;
    notificationsUrl: string;
    labelsUrl: string;
    releasesUrl: string;
    deploymentsUrl: string;
    createdAt: string;
    updatedAt: string;
    pushedAt: string;
    gitUrl: string;
    sshUrl: string;
    cloneUrl: string;
    svnUrl: string;
    homePage: string;
    size: BigInteger;
    stargazersCount: BigInt;
    watchersCount: BigInt;
    language: string;
    hasIssues: boolean;
    hasProjects: boolean;
    hasDownload: boolean;
    hasWiki: boolean;
    hasPages: boolean;
    hasDiscussions: boolean;
    forkCounts: BigInteger;
    mirrorUrl: string;
    archived: boolean;
    disabled: boolean;
    openIssuesCount: BigInt;
    license: string;
    allowForking: boolean;
    isTemplate: boolean;
    webCommitSignoffRequired: boolean;
    topics: string[];
    visiblitiy: string;
    forks: BigInt;
    openIssues: BigInt;
    watchers: BigInt;
    defaultBranch: string;

}