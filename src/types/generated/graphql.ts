import type { IGatsbyImageData } from 'gatsby-plugin-image';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  GatsbyImageData: IGatsbyImageData;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
}










export interface AvifOptions {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
}

export interface AboutJson extends Node {
  readonly __typename?: 'AboutJson';
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
}

export interface AboutJsonConnection {
  readonly __typename?: 'AboutJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AboutJsonEdge>;
  readonly nodes: ReadonlyArray<AboutJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<AboutJsonGroupConnection>;
}


export interface AboutJsonConnectionDistinctArgs {
  field: AboutJsonFieldsEnum;
}


export interface AboutJsonConnectionMaxArgs {
  field: AboutJsonFieldsEnum;
}


export interface AboutJsonConnectionMinArgs {
  field: AboutJsonFieldsEnum;
}


export interface AboutJsonConnectionSumArgs {
  field: AboutJsonFieldsEnum;
}


export interface AboutJsonConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: AboutJsonFieldsEnum;
}

export interface AboutJsonEdge {
  readonly __typename?: 'AboutJsonEdge';
  readonly next: Maybe<AboutJson>;
  readonly node: AboutJson;
  readonly previous: Maybe<AboutJson>;
}

export enum AboutJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title'
}

export interface AboutJsonFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface AboutJsonFilterListInput {
  readonly elemMatch: Maybe<AboutJsonFilterInput>;
}

export interface AboutJsonGroupConnection {
  readonly __typename?: 'AboutJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AboutJsonEdge>;
  readonly nodes: ReadonlyArray<AboutJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface AboutJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<AboutJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface AlbumsJson extends Node {
  readonly __typename?: 'AlbumsJson';
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<Maybe<AlbumsJsonImages>>>;
  readonly description: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly fields: Maybe<AlbumsJsonFields>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
}


export interface AlbumsJsonGatsbyPathArgs {
  filePath: Maybe<Scalars['String']>;
}

export interface AlbumsJsonConnection {
  readonly __typename?: 'AlbumsJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AlbumsJsonEdge>;
  readonly nodes: ReadonlyArray<AlbumsJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<AlbumsJsonGroupConnection>;
}


export interface AlbumsJsonConnectionDistinctArgs {
  field: AlbumsJsonFieldsEnum;
}


export interface AlbumsJsonConnectionMaxArgs {
  field: AlbumsJsonFieldsEnum;
}


export interface AlbumsJsonConnectionMinArgs {
  field: AlbumsJsonFieldsEnum;
}


export interface AlbumsJsonConnectionSumArgs {
  field: AlbumsJsonFieldsEnum;
}


export interface AlbumsJsonConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: AlbumsJsonFieldsEnum;
}

export interface AlbumsJsonEdge {
  readonly __typename?: 'AlbumsJsonEdge';
  readonly next: Maybe<AlbumsJson>;
  readonly node: AlbumsJson;
  readonly previous: Maybe<AlbumsJson>;
}

export interface AlbumsJsonFields {
  readonly __typename?: 'AlbumsJsonFields';
  readonly slug: Maybe<Scalars['String']>;
}

export enum AlbumsJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  images = 'images',
  images___url___sourceInstanceName = 'images___url___sourceInstanceName',
  images___url___absolutePath = 'images___url___absolutePath',
  images___url___relativePath = 'images___url___relativePath',
  images___url___extension = 'images___url___extension',
  images___url___size = 'images___url___size',
  images___url___prettySize = 'images___url___prettySize',
  images___url___modifiedTime = 'images___url___modifiedTime',
  images___url___accessTime = 'images___url___accessTime',
  images___url___changeTime = 'images___url___changeTime',
  images___url___birthTime = 'images___url___birthTime',
  images___url___root = 'images___url___root',
  images___url___dir = 'images___url___dir',
  images___url___base = 'images___url___base',
  images___url___ext = 'images___url___ext',
  images___url___name = 'images___url___name',
  images___url___relativeDirectory = 'images___url___relativeDirectory',
  images___url___dev = 'images___url___dev',
  images___url___mode = 'images___url___mode',
  images___url___nlink = 'images___url___nlink',
  images___url___uid = 'images___url___uid',
  images___url___gid = 'images___url___gid',
  images___url___rdev = 'images___url___rdev',
  images___url___ino = 'images___url___ino',
  images___url___atimeMs = 'images___url___atimeMs',
  images___url___mtimeMs = 'images___url___mtimeMs',
  images___url___ctimeMs = 'images___url___ctimeMs',
  images___url___atime = 'images___url___atime',
  images___url___mtime = 'images___url___mtime',
  images___url___ctime = 'images___url___ctime',
  images___url___birthtime = 'images___url___birthtime',
  images___url___birthtimeMs = 'images___url___birthtimeMs',
  images___url___blksize = 'images___url___blksize',
  images___url___blocks = 'images___url___blocks',
  images___url___publicURL = 'images___url___publicURL',
  images___url___childrenImageSharp = 'images___url___childrenImageSharp',
  images___url___childrenImageSharp___gatsbyImageData = 'images___url___childrenImageSharp___gatsbyImageData',
  images___url___childrenImageSharp___id = 'images___url___childrenImageSharp___id',
  images___url___childrenImageSharp___children = 'images___url___childrenImageSharp___children',
  images___url___childImageSharp___gatsbyImageData = 'images___url___childImageSharp___gatsbyImageData',
  images___url___childImageSharp___id = 'images___url___childImageSharp___id',
  images___url___childImageSharp___children = 'images___url___childImageSharp___children',
  images___url___childrenSeriesJson = 'images___url___childrenSeriesJson',
  images___url___childrenSeriesJson___albums = 'images___url___childrenSeriesJson___albums',
  images___url___childrenSeriesJson___title = 'images___url___childrenSeriesJson___title',
  images___url___childrenSeriesJson___id = 'images___url___childrenSeriesJson___id',
  images___url___childrenSeriesJson___children = 'images___url___childrenSeriesJson___children',
  images___url___childSeriesJson___albums = 'images___url___childSeriesJson___albums',
  images___url___childSeriesJson___title = 'images___url___childSeriesJson___title',
  images___url___childSeriesJson___id = 'images___url___childSeriesJson___id',
  images___url___childSeriesJson___children = 'images___url___childSeriesJson___children',
  images___url___childrenAboutJson = 'images___url___childrenAboutJson',
  images___url___childrenAboutJson___id = 'images___url___childrenAboutJson___id',
  images___url___childrenAboutJson___children = 'images___url___childrenAboutJson___children',
  images___url___childrenAboutJson___title = 'images___url___childrenAboutJson___title',
  images___url___childAboutJson___id = 'images___url___childAboutJson___id',
  images___url___childAboutJson___children = 'images___url___childAboutJson___children',
  images___url___childAboutJson___title = 'images___url___childAboutJson___title',
  images___url___childrenBackstageJson = 'images___url___childrenBackstageJson',
  images___url___childrenBackstageJson___id = 'images___url___childrenBackstageJson___id',
  images___url___childrenBackstageJson___children = 'images___url___childrenBackstageJson___children',
  images___url___childrenBackstageJson___title = 'images___url___childrenBackstageJson___title',
  images___url___childBackstageJson___id = 'images___url___childBackstageJson___id',
  images___url___childBackstageJson___children = 'images___url___childBackstageJson___children',
  images___url___childBackstageJson___title = 'images___url___childBackstageJson___title',
  images___url___childrenPicsJson = 'images___url___childrenPicsJson',
  images___url___childrenPicsJson___id = 'images___url___childrenPicsJson___id',
  images___url___childrenPicsJson___children = 'images___url___childrenPicsJson___children',
  images___url___childrenPicsJson___title = 'images___url___childrenPicsJson___title',
  images___url___childrenPicsJson___pics = 'images___url___childrenPicsJson___pics',
  images___url___childPicsJson___id = 'images___url___childPicsJson___id',
  images___url___childPicsJson___children = 'images___url___childPicsJson___children',
  images___url___childPicsJson___title = 'images___url___childPicsJson___title',
  images___url___childPicsJson___pics = 'images___url___childPicsJson___pics',
  images___url___childrenContactsJson = 'images___url___childrenContactsJson',
  images___url___childrenContactsJson___id = 'images___url___childrenContactsJson___id',
  images___url___childrenContactsJson___children = 'images___url___childrenContactsJson___children',
  images___url___childrenContactsJson___title = 'images___url___childrenContactsJson___title',
  images___url___childContactsJson___id = 'images___url___childContactsJson___id',
  images___url___childContactsJson___children = 'images___url___childContactsJson___children',
  images___url___childContactsJson___title = 'images___url___childContactsJson___title',
  images___url___childrenAlbumsJson = 'images___url___childrenAlbumsJson',
  images___url___childrenAlbumsJson___id = 'images___url___childrenAlbumsJson___id',
  images___url___childrenAlbumsJson___children = 'images___url___childrenAlbumsJson___children',
  images___url___childrenAlbumsJson___title = 'images___url___childrenAlbumsJson___title',
  images___url___childrenAlbumsJson___images = 'images___url___childrenAlbumsJson___images',
  images___url___childrenAlbumsJson___description = 'images___url___childrenAlbumsJson___description',
  images___url___childrenAlbumsJson___background = 'images___url___childrenAlbumsJson___background',
  images___url___childrenAlbumsJson___gatsbyPath = 'images___url___childrenAlbumsJson___gatsbyPath',
  images___url___childAlbumsJson___id = 'images___url___childAlbumsJson___id',
  images___url___childAlbumsJson___children = 'images___url___childAlbumsJson___children',
  images___url___childAlbumsJson___title = 'images___url___childAlbumsJson___title',
  images___url___childAlbumsJson___images = 'images___url___childAlbumsJson___images',
  images___url___childAlbumsJson___description = 'images___url___childAlbumsJson___description',
  images___url___childAlbumsJson___background = 'images___url___childAlbumsJson___background',
  images___url___childAlbumsJson___gatsbyPath = 'images___url___childAlbumsJson___gatsbyPath',
  images___url___id = 'images___url___id',
  images___url___parent___id = 'images___url___parent___id',
  images___url___parent___children = 'images___url___parent___children',
  images___url___children = 'images___url___children',
  images___url___children___id = 'images___url___children___id',
  images___url___children___children = 'images___url___children___children',
  images___url___internal___content = 'images___url___internal___content',
  images___url___internal___contentDigest = 'images___url___internal___contentDigest',
  images___url___internal___description = 'images___url___internal___description',
  images___url___internal___fieldOwners = 'images___url___internal___fieldOwners',
  images___url___internal___ignoreType = 'images___url___internal___ignoreType',
  images___url___internal___mediaType = 'images___url___internal___mediaType',
  images___url___internal___owner = 'images___url___internal___owner',
  images___url___internal___type = 'images___url___internal___type',
  images___cover = 'images___cover',
  description = 'description',
  background = 'background',
  fields___slug = 'fields___slug',
  gatsbyPath = 'gatsbyPath'
}

export interface AlbumsJsonFieldsFilterInput {
  readonly slug: Maybe<StringQueryOperatorInput>;
}

export interface AlbumsJsonFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly images: Maybe<AlbumsJsonImagesFilterListInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<AlbumsJsonFieldsFilterInput>;
  readonly gatsbyPath: Maybe<StringQueryOperatorInput>;
}

export interface AlbumsJsonFilterListInput {
  readonly elemMatch: Maybe<AlbumsJsonFilterInput>;
}

export interface AlbumsJsonGroupConnection {
  readonly __typename?: 'AlbumsJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AlbumsJsonEdge>;
  readonly nodes: ReadonlyArray<AlbumsJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface AlbumsJsonImages {
  readonly __typename?: 'AlbumsJsonImages';
  readonly url: Maybe<File>;
  readonly cover: Maybe<Scalars['Boolean']>;
}

export interface AlbumsJsonImagesFilterInput {
  readonly url: Maybe<FileFilterInput>;
  readonly cover: Maybe<BooleanQueryOperatorInput>;
}

export interface AlbumsJsonImagesFilterListInput {
  readonly elemMatch: Maybe<AlbumsJsonImagesFilterInput>;
}

export interface AlbumsJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<AlbumsJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface BackstageJson extends Node {
  readonly __typename?: 'BackstageJson';
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
}

export interface BackstageJsonConnection {
  readonly __typename?: 'BackstageJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BackstageJsonEdge>;
  readonly nodes: ReadonlyArray<BackstageJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<BackstageJsonGroupConnection>;
}


export interface BackstageJsonConnectionDistinctArgs {
  field: BackstageJsonFieldsEnum;
}


export interface BackstageJsonConnectionMaxArgs {
  field: BackstageJsonFieldsEnum;
}


export interface BackstageJsonConnectionMinArgs {
  field: BackstageJsonFieldsEnum;
}


export interface BackstageJsonConnectionSumArgs {
  field: BackstageJsonFieldsEnum;
}


export interface BackstageJsonConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: BackstageJsonFieldsEnum;
}

export interface BackstageJsonEdge {
  readonly __typename?: 'BackstageJsonEdge';
  readonly next: Maybe<BackstageJson>;
  readonly node: BackstageJson;
  readonly previous: Maybe<BackstageJson>;
}

export enum BackstageJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title'
}

export interface BackstageJsonFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface BackstageJsonFilterListInput {
  readonly elemMatch: Maybe<BackstageJsonFilterInput>;
}

export interface BackstageJsonGroupConnection {
  readonly __typename?: 'BackstageJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BackstageJsonEdge>;
  readonly nodes: ReadonlyArray<BackstageJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface BackstageJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<BackstageJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface BlurredOptions {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
}

export interface BooleanQueryOperatorInput {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
}

export interface ContactsJson extends Node {
  readonly __typename?: 'ContactsJson';
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
}

export interface ContactsJsonConnection {
  readonly __typename?: 'ContactsJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContactsJsonEdge>;
  readonly nodes: ReadonlyArray<ContactsJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContactsJsonGroupConnection>;
}


export interface ContactsJsonConnectionDistinctArgs {
  field: ContactsJsonFieldsEnum;
}


export interface ContactsJsonConnectionMaxArgs {
  field: ContactsJsonFieldsEnum;
}


export interface ContactsJsonConnectionMinArgs {
  field: ContactsJsonFieldsEnum;
}


export interface ContactsJsonConnectionSumArgs {
  field: ContactsJsonFieldsEnum;
}


export interface ContactsJsonConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContactsJsonFieldsEnum;
}

export interface ContactsJsonEdge {
  readonly __typename?: 'ContactsJsonEdge';
  readonly next: Maybe<ContactsJson>;
  readonly node: ContactsJson;
  readonly previous: Maybe<ContactsJson>;
}

export enum ContactsJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title'
}

export interface ContactsJsonFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface ContactsJsonFilterListInput {
  readonly elemMatch: Maybe<ContactsJsonFilterInput>;
}

export interface ContactsJsonGroupConnection {
  readonly __typename?: 'ContactsJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContactsJsonEdge>;
  readonly nodes: ReadonlyArray<ContactsJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface ContactsJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContactsJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}


export interface DateQueryOperatorInput {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
}

export interface Directory extends Node {
  readonly __typename?: 'Directory';
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
}


export interface DirectoryModifiedTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryAccessTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryChangeTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryBirthTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryAtimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryMtimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryCtimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}

export interface DirectoryConnection {
  readonly __typename?: 'DirectoryConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
}


export interface DirectoryConnectionDistinctArgs {
  field: DirectoryFieldsEnum;
}


export interface DirectoryConnectionMaxArgs {
  field: DirectoryFieldsEnum;
}


export interface DirectoryConnectionMinArgs {
  field: DirectoryFieldsEnum;
}


export interface DirectoryConnectionSumArgs {
  field: DirectoryFieldsEnum;
}


export interface DirectoryConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
}

export interface DirectoryEdge {
  readonly __typename?: 'DirectoryEdge';
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
}

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export interface DirectoryFilterInput {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
}

export interface DirectoryGroupConnection {
  readonly __typename?: 'DirectoryGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface DirectorySortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface DuotoneGradient {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
}

export interface File extends Node {
  readonly __typename?: 'File';
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type SeriesJson */
  readonly childrenSeriesJson: Maybe<ReadonlyArray<Maybe<SeriesJson>>>;
  /** Returns the first child node of type SeriesJson or null if there are no children of given type on this node */
  readonly childSeriesJson: Maybe<SeriesJson>;
  /** Returns all children nodes filtered by type AboutJson */
  readonly childrenAboutJson: Maybe<ReadonlyArray<Maybe<AboutJson>>>;
  /** Returns the first child node of type AboutJson or null if there are no children of given type on this node */
  readonly childAboutJson: Maybe<AboutJson>;
  /** Returns all children nodes filtered by type BackstageJson */
  readonly childrenBackstageJson: Maybe<ReadonlyArray<Maybe<BackstageJson>>>;
  /** Returns the first child node of type BackstageJson or null if there are no children of given type on this node */
  readonly childBackstageJson: Maybe<BackstageJson>;
  /** Returns all children nodes filtered by type PicsJson */
  readonly childrenPicsJson: Maybe<ReadonlyArray<Maybe<PicsJson>>>;
  /** Returns the first child node of type PicsJson or null if there are no children of given type on this node */
  readonly childPicsJson: Maybe<PicsJson>;
  /** Returns all children nodes filtered by type ContactsJson */
  readonly childrenContactsJson: Maybe<ReadonlyArray<Maybe<ContactsJson>>>;
  /** Returns the first child node of type ContactsJson or null if there are no children of given type on this node */
  readonly childContactsJson: Maybe<ContactsJson>;
  /** Returns all children nodes filtered by type AlbumsJson */
  readonly childrenAlbumsJson: Maybe<ReadonlyArray<Maybe<AlbumsJson>>>;
  /** Returns the first child node of type AlbumsJson or null if there are no children of given type on this node */
  readonly childAlbumsJson: Maybe<AlbumsJson>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
}


export interface FileModifiedTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileAccessTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileChangeTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileBirthTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileAtimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileMtimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileCtimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}

export interface FileConnection {
  readonly __typename?: 'FileConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
}


export interface FileConnectionDistinctArgs {
  field: FileFieldsEnum;
}


export interface FileConnectionMaxArgs {
  field: FileFieldsEnum;
}


export interface FileConnectionMinArgs {
  field: FileFieldsEnum;
}


export interface FileConnectionSumArgs {
  field: FileFieldsEnum;
}


export interface FileConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
}

export interface FileEdge {
  readonly __typename?: 'FileEdge';
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
}

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childrenSeriesJson = 'childrenSeriesJson',
  childrenSeriesJson___albums = 'childrenSeriesJson___albums',
  childrenSeriesJson___albums___id = 'childrenSeriesJson___albums___id',
  childrenSeriesJson___albums___parent___id = 'childrenSeriesJson___albums___parent___id',
  childrenSeriesJson___albums___parent___children = 'childrenSeriesJson___albums___parent___children',
  childrenSeriesJson___albums___children = 'childrenSeriesJson___albums___children',
  childrenSeriesJson___albums___children___id = 'childrenSeriesJson___albums___children___id',
  childrenSeriesJson___albums___children___children = 'childrenSeriesJson___albums___children___children',
  childrenSeriesJson___albums___internal___content = 'childrenSeriesJson___albums___internal___content',
  childrenSeriesJson___albums___internal___contentDigest = 'childrenSeriesJson___albums___internal___contentDigest',
  childrenSeriesJson___albums___internal___description = 'childrenSeriesJson___albums___internal___description',
  childrenSeriesJson___albums___internal___fieldOwners = 'childrenSeriesJson___albums___internal___fieldOwners',
  childrenSeriesJson___albums___internal___ignoreType = 'childrenSeriesJson___albums___internal___ignoreType',
  childrenSeriesJson___albums___internal___mediaType = 'childrenSeriesJson___albums___internal___mediaType',
  childrenSeriesJson___albums___internal___owner = 'childrenSeriesJson___albums___internal___owner',
  childrenSeriesJson___albums___internal___type = 'childrenSeriesJson___albums___internal___type',
  childrenSeriesJson___albums___title = 'childrenSeriesJson___albums___title',
  childrenSeriesJson___albums___images = 'childrenSeriesJson___albums___images',
  childrenSeriesJson___albums___images___cover = 'childrenSeriesJson___albums___images___cover',
  childrenSeriesJson___albums___description = 'childrenSeriesJson___albums___description',
  childrenSeriesJson___albums___background = 'childrenSeriesJson___albums___background',
  childrenSeriesJson___albums___fields___slug = 'childrenSeriesJson___albums___fields___slug',
  childrenSeriesJson___albums___gatsbyPath = 'childrenSeriesJson___albums___gatsbyPath',
  childrenSeriesJson___title = 'childrenSeriesJson___title',
  childrenSeriesJson___id = 'childrenSeriesJson___id',
  childrenSeriesJson___parent___id = 'childrenSeriesJson___parent___id',
  childrenSeriesJson___parent___parent___id = 'childrenSeriesJson___parent___parent___id',
  childrenSeriesJson___parent___parent___children = 'childrenSeriesJson___parent___parent___children',
  childrenSeriesJson___parent___children = 'childrenSeriesJson___parent___children',
  childrenSeriesJson___parent___children___id = 'childrenSeriesJson___parent___children___id',
  childrenSeriesJson___parent___children___children = 'childrenSeriesJson___parent___children___children',
  childrenSeriesJson___parent___internal___content = 'childrenSeriesJson___parent___internal___content',
  childrenSeriesJson___parent___internal___contentDigest = 'childrenSeriesJson___parent___internal___contentDigest',
  childrenSeriesJson___parent___internal___description = 'childrenSeriesJson___parent___internal___description',
  childrenSeriesJson___parent___internal___fieldOwners = 'childrenSeriesJson___parent___internal___fieldOwners',
  childrenSeriesJson___parent___internal___ignoreType = 'childrenSeriesJson___parent___internal___ignoreType',
  childrenSeriesJson___parent___internal___mediaType = 'childrenSeriesJson___parent___internal___mediaType',
  childrenSeriesJson___parent___internal___owner = 'childrenSeriesJson___parent___internal___owner',
  childrenSeriesJson___parent___internal___type = 'childrenSeriesJson___parent___internal___type',
  childrenSeriesJson___children = 'childrenSeriesJson___children',
  childrenSeriesJson___children___id = 'childrenSeriesJson___children___id',
  childrenSeriesJson___children___parent___id = 'childrenSeriesJson___children___parent___id',
  childrenSeriesJson___children___parent___children = 'childrenSeriesJson___children___parent___children',
  childrenSeriesJson___children___children = 'childrenSeriesJson___children___children',
  childrenSeriesJson___children___children___id = 'childrenSeriesJson___children___children___id',
  childrenSeriesJson___children___children___children = 'childrenSeriesJson___children___children___children',
  childrenSeriesJson___children___internal___content = 'childrenSeriesJson___children___internal___content',
  childrenSeriesJson___children___internal___contentDigest = 'childrenSeriesJson___children___internal___contentDigest',
  childrenSeriesJson___children___internal___description = 'childrenSeriesJson___children___internal___description',
  childrenSeriesJson___children___internal___fieldOwners = 'childrenSeriesJson___children___internal___fieldOwners',
  childrenSeriesJson___children___internal___ignoreType = 'childrenSeriesJson___children___internal___ignoreType',
  childrenSeriesJson___children___internal___mediaType = 'childrenSeriesJson___children___internal___mediaType',
  childrenSeriesJson___children___internal___owner = 'childrenSeriesJson___children___internal___owner',
  childrenSeriesJson___children___internal___type = 'childrenSeriesJson___children___internal___type',
  childrenSeriesJson___internal___content = 'childrenSeriesJson___internal___content',
  childrenSeriesJson___internal___contentDigest = 'childrenSeriesJson___internal___contentDigest',
  childrenSeriesJson___internal___description = 'childrenSeriesJson___internal___description',
  childrenSeriesJson___internal___fieldOwners = 'childrenSeriesJson___internal___fieldOwners',
  childrenSeriesJson___internal___ignoreType = 'childrenSeriesJson___internal___ignoreType',
  childrenSeriesJson___internal___mediaType = 'childrenSeriesJson___internal___mediaType',
  childrenSeriesJson___internal___owner = 'childrenSeriesJson___internal___owner',
  childrenSeriesJson___internal___type = 'childrenSeriesJson___internal___type',
  childSeriesJson___albums = 'childSeriesJson___albums',
  childSeriesJson___albums___id = 'childSeriesJson___albums___id',
  childSeriesJson___albums___parent___id = 'childSeriesJson___albums___parent___id',
  childSeriesJson___albums___parent___children = 'childSeriesJson___albums___parent___children',
  childSeriesJson___albums___children = 'childSeriesJson___albums___children',
  childSeriesJson___albums___children___id = 'childSeriesJson___albums___children___id',
  childSeriesJson___albums___children___children = 'childSeriesJson___albums___children___children',
  childSeriesJson___albums___internal___content = 'childSeriesJson___albums___internal___content',
  childSeriesJson___albums___internal___contentDigest = 'childSeriesJson___albums___internal___contentDigest',
  childSeriesJson___albums___internal___description = 'childSeriesJson___albums___internal___description',
  childSeriesJson___albums___internal___fieldOwners = 'childSeriesJson___albums___internal___fieldOwners',
  childSeriesJson___albums___internal___ignoreType = 'childSeriesJson___albums___internal___ignoreType',
  childSeriesJson___albums___internal___mediaType = 'childSeriesJson___albums___internal___mediaType',
  childSeriesJson___albums___internal___owner = 'childSeriesJson___albums___internal___owner',
  childSeriesJson___albums___internal___type = 'childSeriesJson___albums___internal___type',
  childSeriesJson___albums___title = 'childSeriesJson___albums___title',
  childSeriesJson___albums___images = 'childSeriesJson___albums___images',
  childSeriesJson___albums___images___cover = 'childSeriesJson___albums___images___cover',
  childSeriesJson___albums___description = 'childSeriesJson___albums___description',
  childSeriesJson___albums___background = 'childSeriesJson___albums___background',
  childSeriesJson___albums___fields___slug = 'childSeriesJson___albums___fields___slug',
  childSeriesJson___albums___gatsbyPath = 'childSeriesJson___albums___gatsbyPath',
  childSeriesJson___title = 'childSeriesJson___title',
  childSeriesJson___id = 'childSeriesJson___id',
  childSeriesJson___parent___id = 'childSeriesJson___parent___id',
  childSeriesJson___parent___parent___id = 'childSeriesJson___parent___parent___id',
  childSeriesJson___parent___parent___children = 'childSeriesJson___parent___parent___children',
  childSeriesJson___parent___children = 'childSeriesJson___parent___children',
  childSeriesJson___parent___children___id = 'childSeriesJson___parent___children___id',
  childSeriesJson___parent___children___children = 'childSeriesJson___parent___children___children',
  childSeriesJson___parent___internal___content = 'childSeriesJson___parent___internal___content',
  childSeriesJson___parent___internal___contentDigest = 'childSeriesJson___parent___internal___contentDigest',
  childSeriesJson___parent___internal___description = 'childSeriesJson___parent___internal___description',
  childSeriesJson___parent___internal___fieldOwners = 'childSeriesJson___parent___internal___fieldOwners',
  childSeriesJson___parent___internal___ignoreType = 'childSeriesJson___parent___internal___ignoreType',
  childSeriesJson___parent___internal___mediaType = 'childSeriesJson___parent___internal___mediaType',
  childSeriesJson___parent___internal___owner = 'childSeriesJson___parent___internal___owner',
  childSeriesJson___parent___internal___type = 'childSeriesJson___parent___internal___type',
  childSeriesJson___children = 'childSeriesJson___children',
  childSeriesJson___children___id = 'childSeriesJson___children___id',
  childSeriesJson___children___parent___id = 'childSeriesJson___children___parent___id',
  childSeriesJson___children___parent___children = 'childSeriesJson___children___parent___children',
  childSeriesJson___children___children = 'childSeriesJson___children___children',
  childSeriesJson___children___children___id = 'childSeriesJson___children___children___id',
  childSeriesJson___children___children___children = 'childSeriesJson___children___children___children',
  childSeriesJson___children___internal___content = 'childSeriesJson___children___internal___content',
  childSeriesJson___children___internal___contentDigest = 'childSeriesJson___children___internal___contentDigest',
  childSeriesJson___children___internal___description = 'childSeriesJson___children___internal___description',
  childSeriesJson___children___internal___fieldOwners = 'childSeriesJson___children___internal___fieldOwners',
  childSeriesJson___children___internal___ignoreType = 'childSeriesJson___children___internal___ignoreType',
  childSeriesJson___children___internal___mediaType = 'childSeriesJson___children___internal___mediaType',
  childSeriesJson___children___internal___owner = 'childSeriesJson___children___internal___owner',
  childSeriesJson___children___internal___type = 'childSeriesJson___children___internal___type',
  childSeriesJson___internal___content = 'childSeriesJson___internal___content',
  childSeriesJson___internal___contentDigest = 'childSeriesJson___internal___contentDigest',
  childSeriesJson___internal___description = 'childSeriesJson___internal___description',
  childSeriesJson___internal___fieldOwners = 'childSeriesJson___internal___fieldOwners',
  childSeriesJson___internal___ignoreType = 'childSeriesJson___internal___ignoreType',
  childSeriesJson___internal___mediaType = 'childSeriesJson___internal___mediaType',
  childSeriesJson___internal___owner = 'childSeriesJson___internal___owner',
  childSeriesJson___internal___type = 'childSeriesJson___internal___type',
  childrenAboutJson = 'childrenAboutJson',
  childrenAboutJson___id = 'childrenAboutJson___id',
  childrenAboutJson___parent___id = 'childrenAboutJson___parent___id',
  childrenAboutJson___parent___parent___id = 'childrenAboutJson___parent___parent___id',
  childrenAboutJson___parent___parent___children = 'childrenAboutJson___parent___parent___children',
  childrenAboutJson___parent___children = 'childrenAboutJson___parent___children',
  childrenAboutJson___parent___children___id = 'childrenAboutJson___parent___children___id',
  childrenAboutJson___parent___children___children = 'childrenAboutJson___parent___children___children',
  childrenAboutJson___parent___internal___content = 'childrenAboutJson___parent___internal___content',
  childrenAboutJson___parent___internal___contentDigest = 'childrenAboutJson___parent___internal___contentDigest',
  childrenAboutJson___parent___internal___description = 'childrenAboutJson___parent___internal___description',
  childrenAboutJson___parent___internal___fieldOwners = 'childrenAboutJson___parent___internal___fieldOwners',
  childrenAboutJson___parent___internal___ignoreType = 'childrenAboutJson___parent___internal___ignoreType',
  childrenAboutJson___parent___internal___mediaType = 'childrenAboutJson___parent___internal___mediaType',
  childrenAboutJson___parent___internal___owner = 'childrenAboutJson___parent___internal___owner',
  childrenAboutJson___parent___internal___type = 'childrenAboutJson___parent___internal___type',
  childrenAboutJson___children = 'childrenAboutJson___children',
  childrenAboutJson___children___id = 'childrenAboutJson___children___id',
  childrenAboutJson___children___parent___id = 'childrenAboutJson___children___parent___id',
  childrenAboutJson___children___parent___children = 'childrenAboutJson___children___parent___children',
  childrenAboutJson___children___children = 'childrenAboutJson___children___children',
  childrenAboutJson___children___children___id = 'childrenAboutJson___children___children___id',
  childrenAboutJson___children___children___children = 'childrenAboutJson___children___children___children',
  childrenAboutJson___children___internal___content = 'childrenAboutJson___children___internal___content',
  childrenAboutJson___children___internal___contentDigest = 'childrenAboutJson___children___internal___contentDigest',
  childrenAboutJson___children___internal___description = 'childrenAboutJson___children___internal___description',
  childrenAboutJson___children___internal___fieldOwners = 'childrenAboutJson___children___internal___fieldOwners',
  childrenAboutJson___children___internal___ignoreType = 'childrenAboutJson___children___internal___ignoreType',
  childrenAboutJson___children___internal___mediaType = 'childrenAboutJson___children___internal___mediaType',
  childrenAboutJson___children___internal___owner = 'childrenAboutJson___children___internal___owner',
  childrenAboutJson___children___internal___type = 'childrenAboutJson___children___internal___type',
  childrenAboutJson___internal___content = 'childrenAboutJson___internal___content',
  childrenAboutJson___internal___contentDigest = 'childrenAboutJson___internal___contentDigest',
  childrenAboutJson___internal___description = 'childrenAboutJson___internal___description',
  childrenAboutJson___internal___fieldOwners = 'childrenAboutJson___internal___fieldOwners',
  childrenAboutJson___internal___ignoreType = 'childrenAboutJson___internal___ignoreType',
  childrenAboutJson___internal___mediaType = 'childrenAboutJson___internal___mediaType',
  childrenAboutJson___internal___owner = 'childrenAboutJson___internal___owner',
  childrenAboutJson___internal___type = 'childrenAboutJson___internal___type',
  childrenAboutJson___title = 'childrenAboutJson___title',
  childAboutJson___id = 'childAboutJson___id',
  childAboutJson___parent___id = 'childAboutJson___parent___id',
  childAboutJson___parent___parent___id = 'childAboutJson___parent___parent___id',
  childAboutJson___parent___parent___children = 'childAboutJson___parent___parent___children',
  childAboutJson___parent___children = 'childAboutJson___parent___children',
  childAboutJson___parent___children___id = 'childAboutJson___parent___children___id',
  childAboutJson___parent___children___children = 'childAboutJson___parent___children___children',
  childAboutJson___parent___internal___content = 'childAboutJson___parent___internal___content',
  childAboutJson___parent___internal___contentDigest = 'childAboutJson___parent___internal___contentDigest',
  childAboutJson___parent___internal___description = 'childAboutJson___parent___internal___description',
  childAboutJson___parent___internal___fieldOwners = 'childAboutJson___parent___internal___fieldOwners',
  childAboutJson___parent___internal___ignoreType = 'childAboutJson___parent___internal___ignoreType',
  childAboutJson___parent___internal___mediaType = 'childAboutJson___parent___internal___mediaType',
  childAboutJson___parent___internal___owner = 'childAboutJson___parent___internal___owner',
  childAboutJson___parent___internal___type = 'childAboutJson___parent___internal___type',
  childAboutJson___children = 'childAboutJson___children',
  childAboutJson___children___id = 'childAboutJson___children___id',
  childAboutJson___children___parent___id = 'childAboutJson___children___parent___id',
  childAboutJson___children___parent___children = 'childAboutJson___children___parent___children',
  childAboutJson___children___children = 'childAboutJson___children___children',
  childAboutJson___children___children___id = 'childAboutJson___children___children___id',
  childAboutJson___children___children___children = 'childAboutJson___children___children___children',
  childAboutJson___children___internal___content = 'childAboutJson___children___internal___content',
  childAboutJson___children___internal___contentDigest = 'childAboutJson___children___internal___contentDigest',
  childAboutJson___children___internal___description = 'childAboutJson___children___internal___description',
  childAboutJson___children___internal___fieldOwners = 'childAboutJson___children___internal___fieldOwners',
  childAboutJson___children___internal___ignoreType = 'childAboutJson___children___internal___ignoreType',
  childAboutJson___children___internal___mediaType = 'childAboutJson___children___internal___mediaType',
  childAboutJson___children___internal___owner = 'childAboutJson___children___internal___owner',
  childAboutJson___children___internal___type = 'childAboutJson___children___internal___type',
  childAboutJson___internal___content = 'childAboutJson___internal___content',
  childAboutJson___internal___contentDigest = 'childAboutJson___internal___contentDigest',
  childAboutJson___internal___description = 'childAboutJson___internal___description',
  childAboutJson___internal___fieldOwners = 'childAboutJson___internal___fieldOwners',
  childAboutJson___internal___ignoreType = 'childAboutJson___internal___ignoreType',
  childAboutJson___internal___mediaType = 'childAboutJson___internal___mediaType',
  childAboutJson___internal___owner = 'childAboutJson___internal___owner',
  childAboutJson___internal___type = 'childAboutJson___internal___type',
  childAboutJson___title = 'childAboutJson___title',
  childrenBackstageJson = 'childrenBackstageJson',
  childrenBackstageJson___id = 'childrenBackstageJson___id',
  childrenBackstageJson___parent___id = 'childrenBackstageJson___parent___id',
  childrenBackstageJson___parent___parent___id = 'childrenBackstageJson___parent___parent___id',
  childrenBackstageJson___parent___parent___children = 'childrenBackstageJson___parent___parent___children',
  childrenBackstageJson___parent___children = 'childrenBackstageJson___parent___children',
  childrenBackstageJson___parent___children___id = 'childrenBackstageJson___parent___children___id',
  childrenBackstageJson___parent___children___children = 'childrenBackstageJson___parent___children___children',
  childrenBackstageJson___parent___internal___content = 'childrenBackstageJson___parent___internal___content',
  childrenBackstageJson___parent___internal___contentDigest = 'childrenBackstageJson___parent___internal___contentDigest',
  childrenBackstageJson___parent___internal___description = 'childrenBackstageJson___parent___internal___description',
  childrenBackstageJson___parent___internal___fieldOwners = 'childrenBackstageJson___parent___internal___fieldOwners',
  childrenBackstageJson___parent___internal___ignoreType = 'childrenBackstageJson___parent___internal___ignoreType',
  childrenBackstageJson___parent___internal___mediaType = 'childrenBackstageJson___parent___internal___mediaType',
  childrenBackstageJson___parent___internal___owner = 'childrenBackstageJson___parent___internal___owner',
  childrenBackstageJson___parent___internal___type = 'childrenBackstageJson___parent___internal___type',
  childrenBackstageJson___children = 'childrenBackstageJson___children',
  childrenBackstageJson___children___id = 'childrenBackstageJson___children___id',
  childrenBackstageJson___children___parent___id = 'childrenBackstageJson___children___parent___id',
  childrenBackstageJson___children___parent___children = 'childrenBackstageJson___children___parent___children',
  childrenBackstageJson___children___children = 'childrenBackstageJson___children___children',
  childrenBackstageJson___children___children___id = 'childrenBackstageJson___children___children___id',
  childrenBackstageJson___children___children___children = 'childrenBackstageJson___children___children___children',
  childrenBackstageJson___children___internal___content = 'childrenBackstageJson___children___internal___content',
  childrenBackstageJson___children___internal___contentDigest = 'childrenBackstageJson___children___internal___contentDigest',
  childrenBackstageJson___children___internal___description = 'childrenBackstageJson___children___internal___description',
  childrenBackstageJson___children___internal___fieldOwners = 'childrenBackstageJson___children___internal___fieldOwners',
  childrenBackstageJson___children___internal___ignoreType = 'childrenBackstageJson___children___internal___ignoreType',
  childrenBackstageJson___children___internal___mediaType = 'childrenBackstageJson___children___internal___mediaType',
  childrenBackstageJson___children___internal___owner = 'childrenBackstageJson___children___internal___owner',
  childrenBackstageJson___children___internal___type = 'childrenBackstageJson___children___internal___type',
  childrenBackstageJson___internal___content = 'childrenBackstageJson___internal___content',
  childrenBackstageJson___internal___contentDigest = 'childrenBackstageJson___internal___contentDigest',
  childrenBackstageJson___internal___description = 'childrenBackstageJson___internal___description',
  childrenBackstageJson___internal___fieldOwners = 'childrenBackstageJson___internal___fieldOwners',
  childrenBackstageJson___internal___ignoreType = 'childrenBackstageJson___internal___ignoreType',
  childrenBackstageJson___internal___mediaType = 'childrenBackstageJson___internal___mediaType',
  childrenBackstageJson___internal___owner = 'childrenBackstageJson___internal___owner',
  childrenBackstageJson___internal___type = 'childrenBackstageJson___internal___type',
  childrenBackstageJson___title = 'childrenBackstageJson___title',
  childBackstageJson___id = 'childBackstageJson___id',
  childBackstageJson___parent___id = 'childBackstageJson___parent___id',
  childBackstageJson___parent___parent___id = 'childBackstageJson___parent___parent___id',
  childBackstageJson___parent___parent___children = 'childBackstageJson___parent___parent___children',
  childBackstageJson___parent___children = 'childBackstageJson___parent___children',
  childBackstageJson___parent___children___id = 'childBackstageJson___parent___children___id',
  childBackstageJson___parent___children___children = 'childBackstageJson___parent___children___children',
  childBackstageJson___parent___internal___content = 'childBackstageJson___parent___internal___content',
  childBackstageJson___parent___internal___contentDigest = 'childBackstageJson___parent___internal___contentDigest',
  childBackstageJson___parent___internal___description = 'childBackstageJson___parent___internal___description',
  childBackstageJson___parent___internal___fieldOwners = 'childBackstageJson___parent___internal___fieldOwners',
  childBackstageJson___parent___internal___ignoreType = 'childBackstageJson___parent___internal___ignoreType',
  childBackstageJson___parent___internal___mediaType = 'childBackstageJson___parent___internal___mediaType',
  childBackstageJson___parent___internal___owner = 'childBackstageJson___parent___internal___owner',
  childBackstageJson___parent___internal___type = 'childBackstageJson___parent___internal___type',
  childBackstageJson___children = 'childBackstageJson___children',
  childBackstageJson___children___id = 'childBackstageJson___children___id',
  childBackstageJson___children___parent___id = 'childBackstageJson___children___parent___id',
  childBackstageJson___children___parent___children = 'childBackstageJson___children___parent___children',
  childBackstageJson___children___children = 'childBackstageJson___children___children',
  childBackstageJson___children___children___id = 'childBackstageJson___children___children___id',
  childBackstageJson___children___children___children = 'childBackstageJson___children___children___children',
  childBackstageJson___children___internal___content = 'childBackstageJson___children___internal___content',
  childBackstageJson___children___internal___contentDigest = 'childBackstageJson___children___internal___contentDigest',
  childBackstageJson___children___internal___description = 'childBackstageJson___children___internal___description',
  childBackstageJson___children___internal___fieldOwners = 'childBackstageJson___children___internal___fieldOwners',
  childBackstageJson___children___internal___ignoreType = 'childBackstageJson___children___internal___ignoreType',
  childBackstageJson___children___internal___mediaType = 'childBackstageJson___children___internal___mediaType',
  childBackstageJson___children___internal___owner = 'childBackstageJson___children___internal___owner',
  childBackstageJson___children___internal___type = 'childBackstageJson___children___internal___type',
  childBackstageJson___internal___content = 'childBackstageJson___internal___content',
  childBackstageJson___internal___contentDigest = 'childBackstageJson___internal___contentDigest',
  childBackstageJson___internal___description = 'childBackstageJson___internal___description',
  childBackstageJson___internal___fieldOwners = 'childBackstageJson___internal___fieldOwners',
  childBackstageJson___internal___ignoreType = 'childBackstageJson___internal___ignoreType',
  childBackstageJson___internal___mediaType = 'childBackstageJson___internal___mediaType',
  childBackstageJson___internal___owner = 'childBackstageJson___internal___owner',
  childBackstageJson___internal___type = 'childBackstageJson___internal___type',
  childBackstageJson___title = 'childBackstageJson___title',
  childrenPicsJson = 'childrenPicsJson',
  childrenPicsJson___id = 'childrenPicsJson___id',
  childrenPicsJson___parent___id = 'childrenPicsJson___parent___id',
  childrenPicsJson___parent___parent___id = 'childrenPicsJson___parent___parent___id',
  childrenPicsJson___parent___parent___children = 'childrenPicsJson___parent___parent___children',
  childrenPicsJson___parent___children = 'childrenPicsJson___parent___children',
  childrenPicsJson___parent___children___id = 'childrenPicsJson___parent___children___id',
  childrenPicsJson___parent___children___children = 'childrenPicsJson___parent___children___children',
  childrenPicsJson___parent___internal___content = 'childrenPicsJson___parent___internal___content',
  childrenPicsJson___parent___internal___contentDigest = 'childrenPicsJson___parent___internal___contentDigest',
  childrenPicsJson___parent___internal___description = 'childrenPicsJson___parent___internal___description',
  childrenPicsJson___parent___internal___fieldOwners = 'childrenPicsJson___parent___internal___fieldOwners',
  childrenPicsJson___parent___internal___ignoreType = 'childrenPicsJson___parent___internal___ignoreType',
  childrenPicsJson___parent___internal___mediaType = 'childrenPicsJson___parent___internal___mediaType',
  childrenPicsJson___parent___internal___owner = 'childrenPicsJson___parent___internal___owner',
  childrenPicsJson___parent___internal___type = 'childrenPicsJson___parent___internal___type',
  childrenPicsJson___children = 'childrenPicsJson___children',
  childrenPicsJson___children___id = 'childrenPicsJson___children___id',
  childrenPicsJson___children___parent___id = 'childrenPicsJson___children___parent___id',
  childrenPicsJson___children___parent___children = 'childrenPicsJson___children___parent___children',
  childrenPicsJson___children___children = 'childrenPicsJson___children___children',
  childrenPicsJson___children___children___id = 'childrenPicsJson___children___children___id',
  childrenPicsJson___children___children___children = 'childrenPicsJson___children___children___children',
  childrenPicsJson___children___internal___content = 'childrenPicsJson___children___internal___content',
  childrenPicsJson___children___internal___contentDigest = 'childrenPicsJson___children___internal___contentDigest',
  childrenPicsJson___children___internal___description = 'childrenPicsJson___children___internal___description',
  childrenPicsJson___children___internal___fieldOwners = 'childrenPicsJson___children___internal___fieldOwners',
  childrenPicsJson___children___internal___ignoreType = 'childrenPicsJson___children___internal___ignoreType',
  childrenPicsJson___children___internal___mediaType = 'childrenPicsJson___children___internal___mediaType',
  childrenPicsJson___children___internal___owner = 'childrenPicsJson___children___internal___owner',
  childrenPicsJson___children___internal___type = 'childrenPicsJson___children___internal___type',
  childrenPicsJson___internal___content = 'childrenPicsJson___internal___content',
  childrenPicsJson___internal___contentDigest = 'childrenPicsJson___internal___contentDigest',
  childrenPicsJson___internal___description = 'childrenPicsJson___internal___description',
  childrenPicsJson___internal___fieldOwners = 'childrenPicsJson___internal___fieldOwners',
  childrenPicsJson___internal___ignoreType = 'childrenPicsJson___internal___ignoreType',
  childrenPicsJson___internal___mediaType = 'childrenPicsJson___internal___mediaType',
  childrenPicsJson___internal___owner = 'childrenPicsJson___internal___owner',
  childrenPicsJson___internal___type = 'childrenPicsJson___internal___type',
  childrenPicsJson___title = 'childrenPicsJson___title',
  childrenPicsJson___pics = 'childrenPicsJson___pics',
  childrenPicsJson___pics___title = 'childrenPicsJson___pics___title',
  childrenPicsJson___pics___description = 'childrenPicsJson___pics___description',
  childrenPicsJson___pics___background = 'childrenPicsJson___pics___background',
  childrenPicsJson___pics___image___sourceInstanceName = 'childrenPicsJson___pics___image___sourceInstanceName',
  childrenPicsJson___pics___image___absolutePath = 'childrenPicsJson___pics___image___absolutePath',
  childrenPicsJson___pics___image___relativePath = 'childrenPicsJson___pics___image___relativePath',
  childrenPicsJson___pics___image___extension = 'childrenPicsJson___pics___image___extension',
  childrenPicsJson___pics___image___size = 'childrenPicsJson___pics___image___size',
  childrenPicsJson___pics___image___prettySize = 'childrenPicsJson___pics___image___prettySize',
  childrenPicsJson___pics___image___modifiedTime = 'childrenPicsJson___pics___image___modifiedTime',
  childrenPicsJson___pics___image___accessTime = 'childrenPicsJson___pics___image___accessTime',
  childrenPicsJson___pics___image___changeTime = 'childrenPicsJson___pics___image___changeTime',
  childrenPicsJson___pics___image___birthTime = 'childrenPicsJson___pics___image___birthTime',
  childrenPicsJson___pics___image___root = 'childrenPicsJson___pics___image___root',
  childrenPicsJson___pics___image___dir = 'childrenPicsJson___pics___image___dir',
  childrenPicsJson___pics___image___base = 'childrenPicsJson___pics___image___base',
  childrenPicsJson___pics___image___ext = 'childrenPicsJson___pics___image___ext',
  childrenPicsJson___pics___image___name = 'childrenPicsJson___pics___image___name',
  childrenPicsJson___pics___image___relativeDirectory = 'childrenPicsJson___pics___image___relativeDirectory',
  childrenPicsJson___pics___image___dev = 'childrenPicsJson___pics___image___dev',
  childrenPicsJson___pics___image___mode = 'childrenPicsJson___pics___image___mode',
  childrenPicsJson___pics___image___nlink = 'childrenPicsJson___pics___image___nlink',
  childrenPicsJson___pics___image___uid = 'childrenPicsJson___pics___image___uid',
  childrenPicsJson___pics___image___gid = 'childrenPicsJson___pics___image___gid',
  childrenPicsJson___pics___image___rdev = 'childrenPicsJson___pics___image___rdev',
  childrenPicsJson___pics___image___ino = 'childrenPicsJson___pics___image___ino',
  childrenPicsJson___pics___image___atimeMs = 'childrenPicsJson___pics___image___atimeMs',
  childrenPicsJson___pics___image___mtimeMs = 'childrenPicsJson___pics___image___mtimeMs',
  childrenPicsJson___pics___image___ctimeMs = 'childrenPicsJson___pics___image___ctimeMs',
  childrenPicsJson___pics___image___atime = 'childrenPicsJson___pics___image___atime',
  childrenPicsJson___pics___image___mtime = 'childrenPicsJson___pics___image___mtime',
  childrenPicsJson___pics___image___ctime = 'childrenPicsJson___pics___image___ctime',
  childrenPicsJson___pics___image___birthtime = 'childrenPicsJson___pics___image___birthtime',
  childrenPicsJson___pics___image___birthtimeMs = 'childrenPicsJson___pics___image___birthtimeMs',
  childrenPicsJson___pics___image___blksize = 'childrenPicsJson___pics___image___blksize',
  childrenPicsJson___pics___image___blocks = 'childrenPicsJson___pics___image___blocks',
  childrenPicsJson___pics___image___publicURL = 'childrenPicsJson___pics___image___publicURL',
  childrenPicsJson___pics___image___childrenImageSharp = 'childrenPicsJson___pics___image___childrenImageSharp',
  childrenPicsJson___pics___image___childrenSeriesJson = 'childrenPicsJson___pics___image___childrenSeriesJson',
  childrenPicsJson___pics___image___childrenAboutJson = 'childrenPicsJson___pics___image___childrenAboutJson',
  childrenPicsJson___pics___image___childrenBackstageJson = 'childrenPicsJson___pics___image___childrenBackstageJson',
  childrenPicsJson___pics___image___childrenPicsJson = 'childrenPicsJson___pics___image___childrenPicsJson',
  childrenPicsJson___pics___image___childrenContactsJson = 'childrenPicsJson___pics___image___childrenContactsJson',
  childrenPicsJson___pics___image___childrenAlbumsJson = 'childrenPicsJson___pics___image___childrenAlbumsJson',
  childrenPicsJson___pics___image___id = 'childrenPicsJson___pics___image___id',
  childrenPicsJson___pics___image___children = 'childrenPicsJson___pics___image___children',
  childPicsJson___id = 'childPicsJson___id',
  childPicsJson___parent___id = 'childPicsJson___parent___id',
  childPicsJson___parent___parent___id = 'childPicsJson___parent___parent___id',
  childPicsJson___parent___parent___children = 'childPicsJson___parent___parent___children',
  childPicsJson___parent___children = 'childPicsJson___parent___children',
  childPicsJson___parent___children___id = 'childPicsJson___parent___children___id',
  childPicsJson___parent___children___children = 'childPicsJson___parent___children___children',
  childPicsJson___parent___internal___content = 'childPicsJson___parent___internal___content',
  childPicsJson___parent___internal___contentDigest = 'childPicsJson___parent___internal___contentDigest',
  childPicsJson___parent___internal___description = 'childPicsJson___parent___internal___description',
  childPicsJson___parent___internal___fieldOwners = 'childPicsJson___parent___internal___fieldOwners',
  childPicsJson___parent___internal___ignoreType = 'childPicsJson___parent___internal___ignoreType',
  childPicsJson___parent___internal___mediaType = 'childPicsJson___parent___internal___mediaType',
  childPicsJson___parent___internal___owner = 'childPicsJson___parent___internal___owner',
  childPicsJson___parent___internal___type = 'childPicsJson___parent___internal___type',
  childPicsJson___children = 'childPicsJson___children',
  childPicsJson___children___id = 'childPicsJson___children___id',
  childPicsJson___children___parent___id = 'childPicsJson___children___parent___id',
  childPicsJson___children___parent___children = 'childPicsJson___children___parent___children',
  childPicsJson___children___children = 'childPicsJson___children___children',
  childPicsJson___children___children___id = 'childPicsJson___children___children___id',
  childPicsJson___children___children___children = 'childPicsJson___children___children___children',
  childPicsJson___children___internal___content = 'childPicsJson___children___internal___content',
  childPicsJson___children___internal___contentDigest = 'childPicsJson___children___internal___contentDigest',
  childPicsJson___children___internal___description = 'childPicsJson___children___internal___description',
  childPicsJson___children___internal___fieldOwners = 'childPicsJson___children___internal___fieldOwners',
  childPicsJson___children___internal___ignoreType = 'childPicsJson___children___internal___ignoreType',
  childPicsJson___children___internal___mediaType = 'childPicsJson___children___internal___mediaType',
  childPicsJson___children___internal___owner = 'childPicsJson___children___internal___owner',
  childPicsJson___children___internal___type = 'childPicsJson___children___internal___type',
  childPicsJson___internal___content = 'childPicsJson___internal___content',
  childPicsJson___internal___contentDigest = 'childPicsJson___internal___contentDigest',
  childPicsJson___internal___description = 'childPicsJson___internal___description',
  childPicsJson___internal___fieldOwners = 'childPicsJson___internal___fieldOwners',
  childPicsJson___internal___ignoreType = 'childPicsJson___internal___ignoreType',
  childPicsJson___internal___mediaType = 'childPicsJson___internal___mediaType',
  childPicsJson___internal___owner = 'childPicsJson___internal___owner',
  childPicsJson___internal___type = 'childPicsJson___internal___type',
  childPicsJson___title = 'childPicsJson___title',
  childPicsJson___pics = 'childPicsJson___pics',
  childPicsJson___pics___title = 'childPicsJson___pics___title',
  childPicsJson___pics___description = 'childPicsJson___pics___description',
  childPicsJson___pics___background = 'childPicsJson___pics___background',
  childPicsJson___pics___image___sourceInstanceName = 'childPicsJson___pics___image___sourceInstanceName',
  childPicsJson___pics___image___absolutePath = 'childPicsJson___pics___image___absolutePath',
  childPicsJson___pics___image___relativePath = 'childPicsJson___pics___image___relativePath',
  childPicsJson___pics___image___extension = 'childPicsJson___pics___image___extension',
  childPicsJson___pics___image___size = 'childPicsJson___pics___image___size',
  childPicsJson___pics___image___prettySize = 'childPicsJson___pics___image___prettySize',
  childPicsJson___pics___image___modifiedTime = 'childPicsJson___pics___image___modifiedTime',
  childPicsJson___pics___image___accessTime = 'childPicsJson___pics___image___accessTime',
  childPicsJson___pics___image___changeTime = 'childPicsJson___pics___image___changeTime',
  childPicsJson___pics___image___birthTime = 'childPicsJson___pics___image___birthTime',
  childPicsJson___pics___image___root = 'childPicsJson___pics___image___root',
  childPicsJson___pics___image___dir = 'childPicsJson___pics___image___dir',
  childPicsJson___pics___image___base = 'childPicsJson___pics___image___base',
  childPicsJson___pics___image___ext = 'childPicsJson___pics___image___ext',
  childPicsJson___pics___image___name = 'childPicsJson___pics___image___name',
  childPicsJson___pics___image___relativeDirectory = 'childPicsJson___pics___image___relativeDirectory',
  childPicsJson___pics___image___dev = 'childPicsJson___pics___image___dev',
  childPicsJson___pics___image___mode = 'childPicsJson___pics___image___mode',
  childPicsJson___pics___image___nlink = 'childPicsJson___pics___image___nlink',
  childPicsJson___pics___image___uid = 'childPicsJson___pics___image___uid',
  childPicsJson___pics___image___gid = 'childPicsJson___pics___image___gid',
  childPicsJson___pics___image___rdev = 'childPicsJson___pics___image___rdev',
  childPicsJson___pics___image___ino = 'childPicsJson___pics___image___ino',
  childPicsJson___pics___image___atimeMs = 'childPicsJson___pics___image___atimeMs',
  childPicsJson___pics___image___mtimeMs = 'childPicsJson___pics___image___mtimeMs',
  childPicsJson___pics___image___ctimeMs = 'childPicsJson___pics___image___ctimeMs',
  childPicsJson___pics___image___atime = 'childPicsJson___pics___image___atime',
  childPicsJson___pics___image___mtime = 'childPicsJson___pics___image___mtime',
  childPicsJson___pics___image___ctime = 'childPicsJson___pics___image___ctime',
  childPicsJson___pics___image___birthtime = 'childPicsJson___pics___image___birthtime',
  childPicsJson___pics___image___birthtimeMs = 'childPicsJson___pics___image___birthtimeMs',
  childPicsJson___pics___image___blksize = 'childPicsJson___pics___image___blksize',
  childPicsJson___pics___image___blocks = 'childPicsJson___pics___image___blocks',
  childPicsJson___pics___image___publicURL = 'childPicsJson___pics___image___publicURL',
  childPicsJson___pics___image___childrenImageSharp = 'childPicsJson___pics___image___childrenImageSharp',
  childPicsJson___pics___image___childrenSeriesJson = 'childPicsJson___pics___image___childrenSeriesJson',
  childPicsJson___pics___image___childrenAboutJson = 'childPicsJson___pics___image___childrenAboutJson',
  childPicsJson___pics___image___childrenBackstageJson = 'childPicsJson___pics___image___childrenBackstageJson',
  childPicsJson___pics___image___childrenPicsJson = 'childPicsJson___pics___image___childrenPicsJson',
  childPicsJson___pics___image___childrenContactsJson = 'childPicsJson___pics___image___childrenContactsJson',
  childPicsJson___pics___image___childrenAlbumsJson = 'childPicsJson___pics___image___childrenAlbumsJson',
  childPicsJson___pics___image___id = 'childPicsJson___pics___image___id',
  childPicsJson___pics___image___children = 'childPicsJson___pics___image___children',
  childrenContactsJson = 'childrenContactsJson',
  childrenContactsJson___id = 'childrenContactsJson___id',
  childrenContactsJson___parent___id = 'childrenContactsJson___parent___id',
  childrenContactsJson___parent___parent___id = 'childrenContactsJson___parent___parent___id',
  childrenContactsJson___parent___parent___children = 'childrenContactsJson___parent___parent___children',
  childrenContactsJson___parent___children = 'childrenContactsJson___parent___children',
  childrenContactsJson___parent___children___id = 'childrenContactsJson___parent___children___id',
  childrenContactsJson___parent___children___children = 'childrenContactsJson___parent___children___children',
  childrenContactsJson___parent___internal___content = 'childrenContactsJson___parent___internal___content',
  childrenContactsJson___parent___internal___contentDigest = 'childrenContactsJson___parent___internal___contentDigest',
  childrenContactsJson___parent___internal___description = 'childrenContactsJson___parent___internal___description',
  childrenContactsJson___parent___internal___fieldOwners = 'childrenContactsJson___parent___internal___fieldOwners',
  childrenContactsJson___parent___internal___ignoreType = 'childrenContactsJson___parent___internal___ignoreType',
  childrenContactsJson___parent___internal___mediaType = 'childrenContactsJson___parent___internal___mediaType',
  childrenContactsJson___parent___internal___owner = 'childrenContactsJson___parent___internal___owner',
  childrenContactsJson___parent___internal___type = 'childrenContactsJson___parent___internal___type',
  childrenContactsJson___children = 'childrenContactsJson___children',
  childrenContactsJson___children___id = 'childrenContactsJson___children___id',
  childrenContactsJson___children___parent___id = 'childrenContactsJson___children___parent___id',
  childrenContactsJson___children___parent___children = 'childrenContactsJson___children___parent___children',
  childrenContactsJson___children___children = 'childrenContactsJson___children___children',
  childrenContactsJson___children___children___id = 'childrenContactsJson___children___children___id',
  childrenContactsJson___children___children___children = 'childrenContactsJson___children___children___children',
  childrenContactsJson___children___internal___content = 'childrenContactsJson___children___internal___content',
  childrenContactsJson___children___internal___contentDigest = 'childrenContactsJson___children___internal___contentDigest',
  childrenContactsJson___children___internal___description = 'childrenContactsJson___children___internal___description',
  childrenContactsJson___children___internal___fieldOwners = 'childrenContactsJson___children___internal___fieldOwners',
  childrenContactsJson___children___internal___ignoreType = 'childrenContactsJson___children___internal___ignoreType',
  childrenContactsJson___children___internal___mediaType = 'childrenContactsJson___children___internal___mediaType',
  childrenContactsJson___children___internal___owner = 'childrenContactsJson___children___internal___owner',
  childrenContactsJson___children___internal___type = 'childrenContactsJson___children___internal___type',
  childrenContactsJson___internal___content = 'childrenContactsJson___internal___content',
  childrenContactsJson___internal___contentDigest = 'childrenContactsJson___internal___contentDigest',
  childrenContactsJson___internal___description = 'childrenContactsJson___internal___description',
  childrenContactsJson___internal___fieldOwners = 'childrenContactsJson___internal___fieldOwners',
  childrenContactsJson___internal___ignoreType = 'childrenContactsJson___internal___ignoreType',
  childrenContactsJson___internal___mediaType = 'childrenContactsJson___internal___mediaType',
  childrenContactsJson___internal___owner = 'childrenContactsJson___internal___owner',
  childrenContactsJson___internal___type = 'childrenContactsJson___internal___type',
  childrenContactsJson___title = 'childrenContactsJson___title',
  childContactsJson___id = 'childContactsJson___id',
  childContactsJson___parent___id = 'childContactsJson___parent___id',
  childContactsJson___parent___parent___id = 'childContactsJson___parent___parent___id',
  childContactsJson___parent___parent___children = 'childContactsJson___parent___parent___children',
  childContactsJson___parent___children = 'childContactsJson___parent___children',
  childContactsJson___parent___children___id = 'childContactsJson___parent___children___id',
  childContactsJson___parent___children___children = 'childContactsJson___parent___children___children',
  childContactsJson___parent___internal___content = 'childContactsJson___parent___internal___content',
  childContactsJson___parent___internal___contentDigest = 'childContactsJson___parent___internal___contentDigest',
  childContactsJson___parent___internal___description = 'childContactsJson___parent___internal___description',
  childContactsJson___parent___internal___fieldOwners = 'childContactsJson___parent___internal___fieldOwners',
  childContactsJson___parent___internal___ignoreType = 'childContactsJson___parent___internal___ignoreType',
  childContactsJson___parent___internal___mediaType = 'childContactsJson___parent___internal___mediaType',
  childContactsJson___parent___internal___owner = 'childContactsJson___parent___internal___owner',
  childContactsJson___parent___internal___type = 'childContactsJson___parent___internal___type',
  childContactsJson___children = 'childContactsJson___children',
  childContactsJson___children___id = 'childContactsJson___children___id',
  childContactsJson___children___parent___id = 'childContactsJson___children___parent___id',
  childContactsJson___children___parent___children = 'childContactsJson___children___parent___children',
  childContactsJson___children___children = 'childContactsJson___children___children',
  childContactsJson___children___children___id = 'childContactsJson___children___children___id',
  childContactsJson___children___children___children = 'childContactsJson___children___children___children',
  childContactsJson___children___internal___content = 'childContactsJson___children___internal___content',
  childContactsJson___children___internal___contentDigest = 'childContactsJson___children___internal___contentDigest',
  childContactsJson___children___internal___description = 'childContactsJson___children___internal___description',
  childContactsJson___children___internal___fieldOwners = 'childContactsJson___children___internal___fieldOwners',
  childContactsJson___children___internal___ignoreType = 'childContactsJson___children___internal___ignoreType',
  childContactsJson___children___internal___mediaType = 'childContactsJson___children___internal___mediaType',
  childContactsJson___children___internal___owner = 'childContactsJson___children___internal___owner',
  childContactsJson___children___internal___type = 'childContactsJson___children___internal___type',
  childContactsJson___internal___content = 'childContactsJson___internal___content',
  childContactsJson___internal___contentDigest = 'childContactsJson___internal___contentDigest',
  childContactsJson___internal___description = 'childContactsJson___internal___description',
  childContactsJson___internal___fieldOwners = 'childContactsJson___internal___fieldOwners',
  childContactsJson___internal___ignoreType = 'childContactsJson___internal___ignoreType',
  childContactsJson___internal___mediaType = 'childContactsJson___internal___mediaType',
  childContactsJson___internal___owner = 'childContactsJson___internal___owner',
  childContactsJson___internal___type = 'childContactsJson___internal___type',
  childContactsJson___title = 'childContactsJson___title',
  childrenAlbumsJson = 'childrenAlbumsJson',
  childrenAlbumsJson___id = 'childrenAlbumsJson___id',
  childrenAlbumsJson___parent___id = 'childrenAlbumsJson___parent___id',
  childrenAlbumsJson___parent___parent___id = 'childrenAlbumsJson___parent___parent___id',
  childrenAlbumsJson___parent___parent___children = 'childrenAlbumsJson___parent___parent___children',
  childrenAlbumsJson___parent___children = 'childrenAlbumsJson___parent___children',
  childrenAlbumsJson___parent___children___id = 'childrenAlbumsJson___parent___children___id',
  childrenAlbumsJson___parent___children___children = 'childrenAlbumsJson___parent___children___children',
  childrenAlbumsJson___parent___internal___content = 'childrenAlbumsJson___parent___internal___content',
  childrenAlbumsJson___parent___internal___contentDigest = 'childrenAlbumsJson___parent___internal___contentDigest',
  childrenAlbumsJson___parent___internal___description = 'childrenAlbumsJson___parent___internal___description',
  childrenAlbumsJson___parent___internal___fieldOwners = 'childrenAlbumsJson___parent___internal___fieldOwners',
  childrenAlbumsJson___parent___internal___ignoreType = 'childrenAlbumsJson___parent___internal___ignoreType',
  childrenAlbumsJson___parent___internal___mediaType = 'childrenAlbumsJson___parent___internal___mediaType',
  childrenAlbumsJson___parent___internal___owner = 'childrenAlbumsJson___parent___internal___owner',
  childrenAlbumsJson___parent___internal___type = 'childrenAlbumsJson___parent___internal___type',
  childrenAlbumsJson___children = 'childrenAlbumsJson___children',
  childrenAlbumsJson___children___id = 'childrenAlbumsJson___children___id',
  childrenAlbumsJson___children___parent___id = 'childrenAlbumsJson___children___parent___id',
  childrenAlbumsJson___children___parent___children = 'childrenAlbumsJson___children___parent___children',
  childrenAlbumsJson___children___children = 'childrenAlbumsJson___children___children',
  childrenAlbumsJson___children___children___id = 'childrenAlbumsJson___children___children___id',
  childrenAlbumsJson___children___children___children = 'childrenAlbumsJson___children___children___children',
  childrenAlbumsJson___children___internal___content = 'childrenAlbumsJson___children___internal___content',
  childrenAlbumsJson___children___internal___contentDigest = 'childrenAlbumsJson___children___internal___contentDigest',
  childrenAlbumsJson___children___internal___description = 'childrenAlbumsJson___children___internal___description',
  childrenAlbumsJson___children___internal___fieldOwners = 'childrenAlbumsJson___children___internal___fieldOwners',
  childrenAlbumsJson___children___internal___ignoreType = 'childrenAlbumsJson___children___internal___ignoreType',
  childrenAlbumsJson___children___internal___mediaType = 'childrenAlbumsJson___children___internal___mediaType',
  childrenAlbumsJson___children___internal___owner = 'childrenAlbumsJson___children___internal___owner',
  childrenAlbumsJson___children___internal___type = 'childrenAlbumsJson___children___internal___type',
  childrenAlbumsJson___internal___content = 'childrenAlbumsJson___internal___content',
  childrenAlbumsJson___internal___contentDigest = 'childrenAlbumsJson___internal___contentDigest',
  childrenAlbumsJson___internal___description = 'childrenAlbumsJson___internal___description',
  childrenAlbumsJson___internal___fieldOwners = 'childrenAlbumsJson___internal___fieldOwners',
  childrenAlbumsJson___internal___ignoreType = 'childrenAlbumsJson___internal___ignoreType',
  childrenAlbumsJson___internal___mediaType = 'childrenAlbumsJson___internal___mediaType',
  childrenAlbumsJson___internal___owner = 'childrenAlbumsJson___internal___owner',
  childrenAlbumsJson___internal___type = 'childrenAlbumsJson___internal___type',
  childrenAlbumsJson___title = 'childrenAlbumsJson___title',
  childrenAlbumsJson___images = 'childrenAlbumsJson___images',
  childrenAlbumsJson___images___url___sourceInstanceName = 'childrenAlbumsJson___images___url___sourceInstanceName',
  childrenAlbumsJson___images___url___absolutePath = 'childrenAlbumsJson___images___url___absolutePath',
  childrenAlbumsJson___images___url___relativePath = 'childrenAlbumsJson___images___url___relativePath',
  childrenAlbumsJson___images___url___extension = 'childrenAlbumsJson___images___url___extension',
  childrenAlbumsJson___images___url___size = 'childrenAlbumsJson___images___url___size',
  childrenAlbumsJson___images___url___prettySize = 'childrenAlbumsJson___images___url___prettySize',
  childrenAlbumsJson___images___url___modifiedTime = 'childrenAlbumsJson___images___url___modifiedTime',
  childrenAlbumsJson___images___url___accessTime = 'childrenAlbumsJson___images___url___accessTime',
  childrenAlbumsJson___images___url___changeTime = 'childrenAlbumsJson___images___url___changeTime',
  childrenAlbumsJson___images___url___birthTime = 'childrenAlbumsJson___images___url___birthTime',
  childrenAlbumsJson___images___url___root = 'childrenAlbumsJson___images___url___root',
  childrenAlbumsJson___images___url___dir = 'childrenAlbumsJson___images___url___dir',
  childrenAlbumsJson___images___url___base = 'childrenAlbumsJson___images___url___base',
  childrenAlbumsJson___images___url___ext = 'childrenAlbumsJson___images___url___ext',
  childrenAlbumsJson___images___url___name = 'childrenAlbumsJson___images___url___name',
  childrenAlbumsJson___images___url___relativeDirectory = 'childrenAlbumsJson___images___url___relativeDirectory',
  childrenAlbumsJson___images___url___dev = 'childrenAlbumsJson___images___url___dev',
  childrenAlbumsJson___images___url___mode = 'childrenAlbumsJson___images___url___mode',
  childrenAlbumsJson___images___url___nlink = 'childrenAlbumsJson___images___url___nlink',
  childrenAlbumsJson___images___url___uid = 'childrenAlbumsJson___images___url___uid',
  childrenAlbumsJson___images___url___gid = 'childrenAlbumsJson___images___url___gid',
  childrenAlbumsJson___images___url___rdev = 'childrenAlbumsJson___images___url___rdev',
  childrenAlbumsJson___images___url___ino = 'childrenAlbumsJson___images___url___ino',
  childrenAlbumsJson___images___url___atimeMs = 'childrenAlbumsJson___images___url___atimeMs',
  childrenAlbumsJson___images___url___mtimeMs = 'childrenAlbumsJson___images___url___mtimeMs',
  childrenAlbumsJson___images___url___ctimeMs = 'childrenAlbumsJson___images___url___ctimeMs',
  childrenAlbumsJson___images___url___atime = 'childrenAlbumsJson___images___url___atime',
  childrenAlbumsJson___images___url___mtime = 'childrenAlbumsJson___images___url___mtime',
  childrenAlbumsJson___images___url___ctime = 'childrenAlbumsJson___images___url___ctime',
  childrenAlbumsJson___images___url___birthtime = 'childrenAlbumsJson___images___url___birthtime',
  childrenAlbumsJson___images___url___birthtimeMs = 'childrenAlbumsJson___images___url___birthtimeMs',
  childrenAlbumsJson___images___url___blksize = 'childrenAlbumsJson___images___url___blksize',
  childrenAlbumsJson___images___url___blocks = 'childrenAlbumsJson___images___url___blocks',
  childrenAlbumsJson___images___url___publicURL = 'childrenAlbumsJson___images___url___publicURL',
  childrenAlbumsJson___images___url___childrenImageSharp = 'childrenAlbumsJson___images___url___childrenImageSharp',
  childrenAlbumsJson___images___url___childrenSeriesJson = 'childrenAlbumsJson___images___url___childrenSeriesJson',
  childrenAlbumsJson___images___url___childrenAboutJson = 'childrenAlbumsJson___images___url___childrenAboutJson',
  childrenAlbumsJson___images___url___childrenBackstageJson = 'childrenAlbumsJson___images___url___childrenBackstageJson',
  childrenAlbumsJson___images___url___childrenPicsJson = 'childrenAlbumsJson___images___url___childrenPicsJson',
  childrenAlbumsJson___images___url___childrenContactsJson = 'childrenAlbumsJson___images___url___childrenContactsJson',
  childrenAlbumsJson___images___url___childrenAlbumsJson = 'childrenAlbumsJson___images___url___childrenAlbumsJson',
  childrenAlbumsJson___images___url___id = 'childrenAlbumsJson___images___url___id',
  childrenAlbumsJson___images___url___children = 'childrenAlbumsJson___images___url___children',
  childrenAlbumsJson___images___cover = 'childrenAlbumsJson___images___cover',
  childrenAlbumsJson___description = 'childrenAlbumsJson___description',
  childrenAlbumsJson___background = 'childrenAlbumsJson___background',
  childrenAlbumsJson___fields___slug = 'childrenAlbumsJson___fields___slug',
  childrenAlbumsJson___gatsbyPath = 'childrenAlbumsJson___gatsbyPath',
  childAlbumsJson___id = 'childAlbumsJson___id',
  childAlbumsJson___parent___id = 'childAlbumsJson___parent___id',
  childAlbumsJson___parent___parent___id = 'childAlbumsJson___parent___parent___id',
  childAlbumsJson___parent___parent___children = 'childAlbumsJson___parent___parent___children',
  childAlbumsJson___parent___children = 'childAlbumsJson___parent___children',
  childAlbumsJson___parent___children___id = 'childAlbumsJson___parent___children___id',
  childAlbumsJson___parent___children___children = 'childAlbumsJson___parent___children___children',
  childAlbumsJson___parent___internal___content = 'childAlbumsJson___parent___internal___content',
  childAlbumsJson___parent___internal___contentDigest = 'childAlbumsJson___parent___internal___contentDigest',
  childAlbumsJson___parent___internal___description = 'childAlbumsJson___parent___internal___description',
  childAlbumsJson___parent___internal___fieldOwners = 'childAlbumsJson___parent___internal___fieldOwners',
  childAlbumsJson___parent___internal___ignoreType = 'childAlbumsJson___parent___internal___ignoreType',
  childAlbumsJson___parent___internal___mediaType = 'childAlbumsJson___parent___internal___mediaType',
  childAlbumsJson___parent___internal___owner = 'childAlbumsJson___parent___internal___owner',
  childAlbumsJson___parent___internal___type = 'childAlbumsJson___parent___internal___type',
  childAlbumsJson___children = 'childAlbumsJson___children',
  childAlbumsJson___children___id = 'childAlbumsJson___children___id',
  childAlbumsJson___children___parent___id = 'childAlbumsJson___children___parent___id',
  childAlbumsJson___children___parent___children = 'childAlbumsJson___children___parent___children',
  childAlbumsJson___children___children = 'childAlbumsJson___children___children',
  childAlbumsJson___children___children___id = 'childAlbumsJson___children___children___id',
  childAlbumsJson___children___children___children = 'childAlbumsJson___children___children___children',
  childAlbumsJson___children___internal___content = 'childAlbumsJson___children___internal___content',
  childAlbumsJson___children___internal___contentDigest = 'childAlbumsJson___children___internal___contentDigest',
  childAlbumsJson___children___internal___description = 'childAlbumsJson___children___internal___description',
  childAlbumsJson___children___internal___fieldOwners = 'childAlbumsJson___children___internal___fieldOwners',
  childAlbumsJson___children___internal___ignoreType = 'childAlbumsJson___children___internal___ignoreType',
  childAlbumsJson___children___internal___mediaType = 'childAlbumsJson___children___internal___mediaType',
  childAlbumsJson___children___internal___owner = 'childAlbumsJson___children___internal___owner',
  childAlbumsJson___children___internal___type = 'childAlbumsJson___children___internal___type',
  childAlbumsJson___internal___content = 'childAlbumsJson___internal___content',
  childAlbumsJson___internal___contentDigest = 'childAlbumsJson___internal___contentDigest',
  childAlbumsJson___internal___description = 'childAlbumsJson___internal___description',
  childAlbumsJson___internal___fieldOwners = 'childAlbumsJson___internal___fieldOwners',
  childAlbumsJson___internal___ignoreType = 'childAlbumsJson___internal___ignoreType',
  childAlbumsJson___internal___mediaType = 'childAlbumsJson___internal___mediaType',
  childAlbumsJson___internal___owner = 'childAlbumsJson___internal___owner',
  childAlbumsJson___internal___type = 'childAlbumsJson___internal___type',
  childAlbumsJson___title = 'childAlbumsJson___title',
  childAlbumsJson___images = 'childAlbumsJson___images',
  childAlbumsJson___images___url___sourceInstanceName = 'childAlbumsJson___images___url___sourceInstanceName',
  childAlbumsJson___images___url___absolutePath = 'childAlbumsJson___images___url___absolutePath',
  childAlbumsJson___images___url___relativePath = 'childAlbumsJson___images___url___relativePath',
  childAlbumsJson___images___url___extension = 'childAlbumsJson___images___url___extension',
  childAlbumsJson___images___url___size = 'childAlbumsJson___images___url___size',
  childAlbumsJson___images___url___prettySize = 'childAlbumsJson___images___url___prettySize',
  childAlbumsJson___images___url___modifiedTime = 'childAlbumsJson___images___url___modifiedTime',
  childAlbumsJson___images___url___accessTime = 'childAlbumsJson___images___url___accessTime',
  childAlbumsJson___images___url___changeTime = 'childAlbumsJson___images___url___changeTime',
  childAlbumsJson___images___url___birthTime = 'childAlbumsJson___images___url___birthTime',
  childAlbumsJson___images___url___root = 'childAlbumsJson___images___url___root',
  childAlbumsJson___images___url___dir = 'childAlbumsJson___images___url___dir',
  childAlbumsJson___images___url___base = 'childAlbumsJson___images___url___base',
  childAlbumsJson___images___url___ext = 'childAlbumsJson___images___url___ext',
  childAlbumsJson___images___url___name = 'childAlbumsJson___images___url___name',
  childAlbumsJson___images___url___relativeDirectory = 'childAlbumsJson___images___url___relativeDirectory',
  childAlbumsJson___images___url___dev = 'childAlbumsJson___images___url___dev',
  childAlbumsJson___images___url___mode = 'childAlbumsJson___images___url___mode',
  childAlbumsJson___images___url___nlink = 'childAlbumsJson___images___url___nlink',
  childAlbumsJson___images___url___uid = 'childAlbumsJson___images___url___uid',
  childAlbumsJson___images___url___gid = 'childAlbumsJson___images___url___gid',
  childAlbumsJson___images___url___rdev = 'childAlbumsJson___images___url___rdev',
  childAlbumsJson___images___url___ino = 'childAlbumsJson___images___url___ino',
  childAlbumsJson___images___url___atimeMs = 'childAlbumsJson___images___url___atimeMs',
  childAlbumsJson___images___url___mtimeMs = 'childAlbumsJson___images___url___mtimeMs',
  childAlbumsJson___images___url___ctimeMs = 'childAlbumsJson___images___url___ctimeMs',
  childAlbumsJson___images___url___atime = 'childAlbumsJson___images___url___atime',
  childAlbumsJson___images___url___mtime = 'childAlbumsJson___images___url___mtime',
  childAlbumsJson___images___url___ctime = 'childAlbumsJson___images___url___ctime',
  childAlbumsJson___images___url___birthtime = 'childAlbumsJson___images___url___birthtime',
  childAlbumsJson___images___url___birthtimeMs = 'childAlbumsJson___images___url___birthtimeMs',
  childAlbumsJson___images___url___blksize = 'childAlbumsJson___images___url___blksize',
  childAlbumsJson___images___url___blocks = 'childAlbumsJson___images___url___blocks',
  childAlbumsJson___images___url___publicURL = 'childAlbumsJson___images___url___publicURL',
  childAlbumsJson___images___url___childrenImageSharp = 'childAlbumsJson___images___url___childrenImageSharp',
  childAlbumsJson___images___url___childrenSeriesJson = 'childAlbumsJson___images___url___childrenSeriesJson',
  childAlbumsJson___images___url___childrenAboutJson = 'childAlbumsJson___images___url___childrenAboutJson',
  childAlbumsJson___images___url___childrenBackstageJson = 'childAlbumsJson___images___url___childrenBackstageJson',
  childAlbumsJson___images___url___childrenPicsJson = 'childAlbumsJson___images___url___childrenPicsJson',
  childAlbumsJson___images___url___childrenContactsJson = 'childAlbumsJson___images___url___childrenContactsJson',
  childAlbumsJson___images___url___childrenAlbumsJson = 'childAlbumsJson___images___url___childrenAlbumsJson',
  childAlbumsJson___images___url___id = 'childAlbumsJson___images___url___id',
  childAlbumsJson___images___url___children = 'childAlbumsJson___images___url___children',
  childAlbumsJson___images___cover = 'childAlbumsJson___images___cover',
  childAlbumsJson___description = 'childAlbumsJson___description',
  childAlbumsJson___background = 'childAlbumsJson___background',
  childAlbumsJson___fields___slug = 'childAlbumsJson___fields___slug',
  childAlbumsJson___gatsbyPath = 'childAlbumsJson___gatsbyPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export interface FileFilterInput {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenSeriesJson: Maybe<SeriesJsonFilterListInput>;
  readonly childSeriesJson: Maybe<SeriesJsonFilterInput>;
  readonly childrenAboutJson: Maybe<AboutJsonFilterListInput>;
  readonly childAboutJson: Maybe<AboutJsonFilterInput>;
  readonly childrenBackstageJson: Maybe<BackstageJsonFilterListInput>;
  readonly childBackstageJson: Maybe<BackstageJsonFilterInput>;
  readonly childrenPicsJson: Maybe<PicsJsonFilterListInput>;
  readonly childPicsJson: Maybe<PicsJsonFilterInput>;
  readonly childrenContactsJson: Maybe<ContactsJsonFilterListInput>;
  readonly childContactsJson: Maybe<ContactsJsonFilterInput>;
  readonly childrenAlbumsJson: Maybe<AlbumsJsonFilterListInput>;
  readonly childAlbumsJson: Maybe<AlbumsJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
}

export interface FileGroupConnection {
  readonly __typename?: 'FileGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface FileSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface FloatQueryOperatorInput {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
}


export interface GatsbyImageDataQueryOperatorInput {
  readonly eq: Maybe<Scalars['GatsbyImageData']>;
  readonly ne: Maybe<Scalars['GatsbyImageData']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['GatsbyImageData']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['GatsbyImageData']>>>;
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF'
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export interface ImageSharp extends Node {
  readonly __typename?: 'ImageSharp';
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
}


export interface ImageSharpFixedArgs {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
}


export interface ImageSharpFluidArgs {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
}


export interface ImageSharpGatsbyImageDataArgs {
  aspectRatio: Maybe<Scalars['Float']>;
  avifOptions: Maybe<AvifOptions>;
  backgroundColor: Maybe<Scalars['String']>;
  blurredOptions: Maybe<BlurredOptions>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  height: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JpgOptions>;
  layout?: Maybe<ImageLayout>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  placeholder: Maybe<ImagePlaceholder>;
  pngOptions: Maybe<PngOptions>;
  quality: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  tracedSVGOptions: Maybe<Potrace>;
  transformOptions: Maybe<TransformOptions>;
  webpOptions: Maybe<WebPOptions>;
  width: Maybe<Scalars['Int']>;
}


export interface ImageSharpResizeArgs {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
}

export interface ImageSharpConnection {
  readonly __typename?: 'ImageSharpConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
}


export interface ImageSharpConnectionDistinctArgs {
  field: ImageSharpFieldsEnum;
}


export interface ImageSharpConnectionMaxArgs {
  field: ImageSharpFieldsEnum;
}


export interface ImageSharpConnectionMinArgs {
  field: ImageSharpFieldsEnum;
}


export interface ImageSharpConnectionSumArgs {
  field: ImageSharpFieldsEnum;
}


export interface ImageSharpConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
}

export interface ImageSharpEdge {
  readonly __typename?: 'ImageSharpEdge';
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
}

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export interface ImageSharpFilterInput {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<GatsbyImageDataQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
}

export interface ImageSharpFilterListInput {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
}

export interface ImageSharpFixed {
  readonly __typename?: 'ImageSharpFixed';
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
}

export interface ImageSharpFixedFilterInput {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpFluid {
  readonly __typename?: 'ImageSharpFluid';
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
}

export interface ImageSharpFluidFilterInput {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
}

export interface ImageSharpGroupConnection {
  readonly __typename?: 'ImageSharpGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface ImageSharpOriginal {
  readonly __typename?: 'ImageSharpOriginal';
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
}

export interface ImageSharpOriginalFilterInput {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpResize {
  readonly __typename?: 'ImageSharpResize';
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
}

export interface ImageSharpResizeFilterInput {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface IntQueryOperatorInput {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
}

export interface Internal {
  readonly __typename?: 'Internal';
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
}

export interface InternalFilterInput {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
}

export interface JpgOptions {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
}


export interface JsonQueryOperatorInput {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
}

export enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

export interface MarkdownHeading {
  readonly __typename?: 'MarkdownHeading';
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
}

export interface MarkdownHeadingFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
}

export interface MarkdownHeadingFilterListInput {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
}

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export interface MarkdownRemark extends Node {
  readonly __typename?: 'MarkdownRemark';
  readonly id: Scalars['ID'];
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
}


export interface MarkdownRemarkExcerptArgs {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
}


export interface MarkdownRemarkExcerptAstArgs {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
}


export interface MarkdownRemarkHeadingsArgs {
  depth: Maybe<MarkdownHeadingLevels>;
}


export interface MarkdownRemarkTableOfContentsArgs {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
}

export interface MarkdownRemarkConnection {
  readonly __typename?: 'MarkdownRemarkConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
}


export interface MarkdownRemarkConnectionDistinctArgs {
  field: MarkdownRemarkFieldsEnum;
}


export interface MarkdownRemarkConnectionMaxArgs {
  field: MarkdownRemarkFieldsEnum;
}


export interface MarkdownRemarkConnectionMinArgs {
  field: MarkdownRemarkFieldsEnum;
}


export interface MarkdownRemarkConnectionSumArgs {
  field: MarkdownRemarkFieldsEnum;
}


export interface MarkdownRemarkConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
}

export interface MarkdownRemarkEdge {
  readonly __typename?: 'MarkdownRemarkEdge';
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
}

export enum MarkdownRemarkFieldsEnum {
  id = 'id',
  html = 'html',
  htmlAst = 'htmlAst',
  excerpt = 'excerpt',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___id = 'headings___id',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export interface MarkdownRemarkFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JsonQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly excerptAst: Maybe<JsonQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
}

export interface MarkdownRemarkGroupConnection {
  readonly __typename?: 'MarkdownRemarkGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface MarkdownRemarkSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface MarkdownWordCount {
  readonly __typename?: 'MarkdownWordCount';
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
}

export interface MarkdownWordCountFilterInput {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
}

/** Node Interface */
export interface Node {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
}

export interface NodeFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
}

export interface NodeFilterListInput {
  readonly elemMatch: Maybe<NodeFilterInput>;
}

export interface PngOptions {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
}

export interface PageInfo {
  readonly __typename?: 'PageInfo';
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
}

export interface PicsJson extends Node {
  readonly __typename?: 'PicsJson';
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
  readonly pics: Maybe<ReadonlyArray<Maybe<PicsJsonPics>>>;
}

export interface PicsJsonConnection {
  readonly __typename?: 'PicsJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PicsJsonEdge>;
  readonly nodes: ReadonlyArray<PicsJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PicsJsonGroupConnection>;
}


export interface PicsJsonConnectionDistinctArgs {
  field: PicsJsonFieldsEnum;
}


export interface PicsJsonConnectionMaxArgs {
  field: PicsJsonFieldsEnum;
}


export interface PicsJsonConnectionMinArgs {
  field: PicsJsonFieldsEnum;
}


export interface PicsJsonConnectionSumArgs {
  field: PicsJsonFieldsEnum;
}


export interface PicsJsonConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PicsJsonFieldsEnum;
}

export interface PicsJsonEdge {
  readonly __typename?: 'PicsJsonEdge';
  readonly next: Maybe<PicsJson>;
  readonly node: PicsJson;
  readonly previous: Maybe<PicsJson>;
}

export enum PicsJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  pics = 'pics',
  pics___title = 'pics___title',
  pics___description = 'pics___description',
  pics___background = 'pics___background',
  pics___image___sourceInstanceName = 'pics___image___sourceInstanceName',
  pics___image___absolutePath = 'pics___image___absolutePath',
  pics___image___relativePath = 'pics___image___relativePath',
  pics___image___extension = 'pics___image___extension',
  pics___image___size = 'pics___image___size',
  pics___image___prettySize = 'pics___image___prettySize',
  pics___image___modifiedTime = 'pics___image___modifiedTime',
  pics___image___accessTime = 'pics___image___accessTime',
  pics___image___changeTime = 'pics___image___changeTime',
  pics___image___birthTime = 'pics___image___birthTime',
  pics___image___root = 'pics___image___root',
  pics___image___dir = 'pics___image___dir',
  pics___image___base = 'pics___image___base',
  pics___image___ext = 'pics___image___ext',
  pics___image___name = 'pics___image___name',
  pics___image___relativeDirectory = 'pics___image___relativeDirectory',
  pics___image___dev = 'pics___image___dev',
  pics___image___mode = 'pics___image___mode',
  pics___image___nlink = 'pics___image___nlink',
  pics___image___uid = 'pics___image___uid',
  pics___image___gid = 'pics___image___gid',
  pics___image___rdev = 'pics___image___rdev',
  pics___image___ino = 'pics___image___ino',
  pics___image___atimeMs = 'pics___image___atimeMs',
  pics___image___mtimeMs = 'pics___image___mtimeMs',
  pics___image___ctimeMs = 'pics___image___ctimeMs',
  pics___image___atime = 'pics___image___atime',
  pics___image___mtime = 'pics___image___mtime',
  pics___image___ctime = 'pics___image___ctime',
  pics___image___birthtime = 'pics___image___birthtime',
  pics___image___birthtimeMs = 'pics___image___birthtimeMs',
  pics___image___blksize = 'pics___image___blksize',
  pics___image___blocks = 'pics___image___blocks',
  pics___image___publicURL = 'pics___image___publicURL',
  pics___image___childrenImageSharp = 'pics___image___childrenImageSharp',
  pics___image___childrenImageSharp___gatsbyImageData = 'pics___image___childrenImageSharp___gatsbyImageData',
  pics___image___childrenImageSharp___id = 'pics___image___childrenImageSharp___id',
  pics___image___childrenImageSharp___children = 'pics___image___childrenImageSharp___children',
  pics___image___childImageSharp___gatsbyImageData = 'pics___image___childImageSharp___gatsbyImageData',
  pics___image___childImageSharp___id = 'pics___image___childImageSharp___id',
  pics___image___childImageSharp___children = 'pics___image___childImageSharp___children',
  pics___image___childrenSeriesJson = 'pics___image___childrenSeriesJson',
  pics___image___childrenSeriesJson___albums = 'pics___image___childrenSeriesJson___albums',
  pics___image___childrenSeriesJson___title = 'pics___image___childrenSeriesJson___title',
  pics___image___childrenSeriesJson___id = 'pics___image___childrenSeriesJson___id',
  pics___image___childrenSeriesJson___children = 'pics___image___childrenSeriesJson___children',
  pics___image___childSeriesJson___albums = 'pics___image___childSeriesJson___albums',
  pics___image___childSeriesJson___title = 'pics___image___childSeriesJson___title',
  pics___image___childSeriesJson___id = 'pics___image___childSeriesJson___id',
  pics___image___childSeriesJson___children = 'pics___image___childSeriesJson___children',
  pics___image___childrenAboutJson = 'pics___image___childrenAboutJson',
  pics___image___childrenAboutJson___id = 'pics___image___childrenAboutJson___id',
  pics___image___childrenAboutJson___children = 'pics___image___childrenAboutJson___children',
  pics___image___childrenAboutJson___title = 'pics___image___childrenAboutJson___title',
  pics___image___childAboutJson___id = 'pics___image___childAboutJson___id',
  pics___image___childAboutJson___children = 'pics___image___childAboutJson___children',
  pics___image___childAboutJson___title = 'pics___image___childAboutJson___title',
  pics___image___childrenBackstageJson = 'pics___image___childrenBackstageJson',
  pics___image___childrenBackstageJson___id = 'pics___image___childrenBackstageJson___id',
  pics___image___childrenBackstageJson___children = 'pics___image___childrenBackstageJson___children',
  pics___image___childrenBackstageJson___title = 'pics___image___childrenBackstageJson___title',
  pics___image___childBackstageJson___id = 'pics___image___childBackstageJson___id',
  pics___image___childBackstageJson___children = 'pics___image___childBackstageJson___children',
  pics___image___childBackstageJson___title = 'pics___image___childBackstageJson___title',
  pics___image___childrenPicsJson = 'pics___image___childrenPicsJson',
  pics___image___childrenPicsJson___id = 'pics___image___childrenPicsJson___id',
  pics___image___childrenPicsJson___children = 'pics___image___childrenPicsJson___children',
  pics___image___childrenPicsJson___title = 'pics___image___childrenPicsJson___title',
  pics___image___childrenPicsJson___pics = 'pics___image___childrenPicsJson___pics',
  pics___image___childPicsJson___id = 'pics___image___childPicsJson___id',
  pics___image___childPicsJson___children = 'pics___image___childPicsJson___children',
  pics___image___childPicsJson___title = 'pics___image___childPicsJson___title',
  pics___image___childPicsJson___pics = 'pics___image___childPicsJson___pics',
  pics___image___childrenContactsJson = 'pics___image___childrenContactsJson',
  pics___image___childrenContactsJson___id = 'pics___image___childrenContactsJson___id',
  pics___image___childrenContactsJson___children = 'pics___image___childrenContactsJson___children',
  pics___image___childrenContactsJson___title = 'pics___image___childrenContactsJson___title',
  pics___image___childContactsJson___id = 'pics___image___childContactsJson___id',
  pics___image___childContactsJson___children = 'pics___image___childContactsJson___children',
  pics___image___childContactsJson___title = 'pics___image___childContactsJson___title',
  pics___image___childrenAlbumsJson = 'pics___image___childrenAlbumsJson',
  pics___image___childrenAlbumsJson___id = 'pics___image___childrenAlbumsJson___id',
  pics___image___childrenAlbumsJson___children = 'pics___image___childrenAlbumsJson___children',
  pics___image___childrenAlbumsJson___title = 'pics___image___childrenAlbumsJson___title',
  pics___image___childrenAlbumsJson___images = 'pics___image___childrenAlbumsJson___images',
  pics___image___childrenAlbumsJson___description = 'pics___image___childrenAlbumsJson___description',
  pics___image___childrenAlbumsJson___background = 'pics___image___childrenAlbumsJson___background',
  pics___image___childrenAlbumsJson___gatsbyPath = 'pics___image___childrenAlbumsJson___gatsbyPath',
  pics___image___childAlbumsJson___id = 'pics___image___childAlbumsJson___id',
  pics___image___childAlbumsJson___children = 'pics___image___childAlbumsJson___children',
  pics___image___childAlbumsJson___title = 'pics___image___childAlbumsJson___title',
  pics___image___childAlbumsJson___images = 'pics___image___childAlbumsJson___images',
  pics___image___childAlbumsJson___description = 'pics___image___childAlbumsJson___description',
  pics___image___childAlbumsJson___background = 'pics___image___childAlbumsJson___background',
  pics___image___childAlbumsJson___gatsbyPath = 'pics___image___childAlbumsJson___gatsbyPath',
  pics___image___id = 'pics___image___id',
  pics___image___parent___id = 'pics___image___parent___id',
  pics___image___parent___children = 'pics___image___parent___children',
  pics___image___children = 'pics___image___children',
  pics___image___children___id = 'pics___image___children___id',
  pics___image___children___children = 'pics___image___children___children',
  pics___image___internal___content = 'pics___image___internal___content',
  pics___image___internal___contentDigest = 'pics___image___internal___contentDigest',
  pics___image___internal___description = 'pics___image___internal___description',
  pics___image___internal___fieldOwners = 'pics___image___internal___fieldOwners',
  pics___image___internal___ignoreType = 'pics___image___internal___ignoreType',
  pics___image___internal___mediaType = 'pics___image___internal___mediaType',
  pics___image___internal___owner = 'pics___image___internal___owner',
  pics___image___internal___type = 'pics___image___internal___type'
}

export interface PicsJsonFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly pics: Maybe<PicsJsonPicsFilterListInput>;
}

export interface PicsJsonFilterListInput {
  readonly elemMatch: Maybe<PicsJsonFilterInput>;
}

export interface PicsJsonGroupConnection {
  readonly __typename?: 'PicsJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PicsJsonEdge>;
  readonly nodes: ReadonlyArray<PicsJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface PicsJsonPics {
  readonly __typename?: 'PicsJsonPics';
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly image: Maybe<File>;
}

export interface PicsJsonPicsFilterInput {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
}

export interface PicsJsonPicsFilterListInput {
  readonly elemMatch: Maybe<PicsJsonPicsFilterInput>;
}

export interface PicsJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<PicsJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface Potrace {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export interface Query {
  readonly __typename?: 'Query';
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly seriesJson: Maybe<SeriesJson>;
  readonly allSeriesJson: SeriesJsonConnection;
  readonly aboutJson: Maybe<AboutJson>;
  readonly allAboutJson: AboutJsonConnection;
  readonly backstageJson: Maybe<BackstageJson>;
  readonly allBackstageJson: BackstageJsonConnection;
  readonly picsJson: Maybe<PicsJson>;
  readonly allPicsJson: PicsJsonConnection;
  readonly contactsJson: Maybe<ContactsJson>;
  readonly allContactsJson: ContactsJsonConnection;
  readonly albumsJson: Maybe<AlbumsJson>;
  readonly allAlbumsJson: AlbumsJsonConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
}


export interface QueryFileArgs {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenSeriesJson: Maybe<SeriesJsonFilterListInput>;
  childSeriesJson: Maybe<SeriesJsonFilterInput>;
  childrenAboutJson: Maybe<AboutJsonFilterListInput>;
  childAboutJson: Maybe<AboutJsonFilterInput>;
  childrenBackstageJson: Maybe<BackstageJsonFilterListInput>;
  childBackstageJson: Maybe<BackstageJsonFilterInput>;
  childrenPicsJson: Maybe<PicsJsonFilterListInput>;
  childPicsJson: Maybe<PicsJsonFilterInput>;
  childrenContactsJson: Maybe<ContactsJsonFilterListInput>;
  childContactsJson: Maybe<ContactsJsonFilterInput>;
  childrenAlbumsJson: Maybe<AlbumsJsonFilterListInput>;
  childAlbumsJson: Maybe<AlbumsJsonFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
}


export interface QueryAllFileArgs {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QueryDirectoryArgs {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
}


export interface QueryAllDirectoryArgs {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QuerySiteArgs {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
}


export interface QueryAllSiteArgs {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QuerySiteFunctionArgs {
  apiRoute: Maybe<StringQueryOperatorInput>;
  originalFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
}


export interface QueryAllSiteFunctionArgs {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QuerySitePageArgs {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
}


export interface QueryAllSitePageArgs {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QueryImageSharpArgs {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<GatsbyImageDataQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
}


export interface QueryAllImageSharpArgs {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QueryMarkdownRemarkArgs {
  id: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
}


export interface QueryAllMarkdownRemarkArgs {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QuerySeriesJsonArgs {
  albums: Maybe<AlbumsJsonFilterListInput>;
  title: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
}


export interface QueryAllSeriesJsonArgs {
  filter: Maybe<SeriesJsonFilterInput>;
  sort: Maybe<SeriesJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QueryAboutJsonArgs {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QueryAllAboutJsonArgs {
  filter: Maybe<AboutJsonFilterInput>;
  sort: Maybe<AboutJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QueryBackstageJsonArgs {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QueryAllBackstageJsonArgs {
  filter: Maybe<BackstageJsonFilterInput>;
  sort: Maybe<BackstageJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QueryPicsJsonArgs {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  pics: Maybe<PicsJsonPicsFilterListInput>;
}


export interface QueryAllPicsJsonArgs {
  filter: Maybe<PicsJsonFilterInput>;
  sort: Maybe<PicsJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QueryContactsJsonArgs {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QueryAllContactsJsonArgs {
  filter: Maybe<ContactsJsonFilterInput>;
  sort: Maybe<ContactsJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QueryAlbumsJsonArgs {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  images: Maybe<AlbumsJsonImagesFilterListInput>;
  description: Maybe<StringQueryOperatorInput>;
  background: Maybe<StringQueryOperatorInput>;
  fields: Maybe<AlbumsJsonFieldsFilterInput>;
  gatsbyPath: Maybe<StringQueryOperatorInput>;
}


export interface QueryAllAlbumsJsonArgs {
  filter: Maybe<AlbumsJsonFilterInput>;
  sort: Maybe<AlbumsJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QuerySiteBuildMetadataArgs {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
}


export interface QueryAllSiteBuildMetadataArgs {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}


export interface QuerySitePluginArgs {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
}


export interface QueryAllSitePluginArgs {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
}

export interface SeriesJson extends Node {
  readonly __typename?: 'SeriesJson';
  readonly albums: Maybe<ReadonlyArray<Maybe<AlbumsJson>>>;
  readonly title: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
}

export interface SeriesJsonConnection {
  readonly __typename?: 'SeriesJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SeriesJsonEdge>;
  readonly nodes: ReadonlyArray<SeriesJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SeriesJsonGroupConnection>;
}


export interface SeriesJsonConnectionDistinctArgs {
  field: SeriesJsonFieldsEnum;
}


export interface SeriesJsonConnectionMaxArgs {
  field: SeriesJsonFieldsEnum;
}


export interface SeriesJsonConnectionMinArgs {
  field: SeriesJsonFieldsEnum;
}


export interface SeriesJsonConnectionSumArgs {
  field: SeriesJsonFieldsEnum;
}


export interface SeriesJsonConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SeriesJsonFieldsEnum;
}

export interface SeriesJsonEdge {
  readonly __typename?: 'SeriesJsonEdge';
  readonly next: Maybe<SeriesJson>;
  readonly node: SeriesJson;
  readonly previous: Maybe<SeriesJson>;
}

export enum SeriesJsonFieldsEnum {
  albums = 'albums',
  albums___id = 'albums___id',
  albums___parent___id = 'albums___parent___id',
  albums___parent___parent___id = 'albums___parent___parent___id',
  albums___parent___parent___children = 'albums___parent___parent___children',
  albums___parent___children = 'albums___parent___children',
  albums___parent___children___id = 'albums___parent___children___id',
  albums___parent___children___children = 'albums___parent___children___children',
  albums___parent___internal___content = 'albums___parent___internal___content',
  albums___parent___internal___contentDigest = 'albums___parent___internal___contentDigest',
  albums___parent___internal___description = 'albums___parent___internal___description',
  albums___parent___internal___fieldOwners = 'albums___parent___internal___fieldOwners',
  albums___parent___internal___ignoreType = 'albums___parent___internal___ignoreType',
  albums___parent___internal___mediaType = 'albums___parent___internal___mediaType',
  albums___parent___internal___owner = 'albums___parent___internal___owner',
  albums___parent___internal___type = 'albums___parent___internal___type',
  albums___children = 'albums___children',
  albums___children___id = 'albums___children___id',
  albums___children___parent___id = 'albums___children___parent___id',
  albums___children___parent___children = 'albums___children___parent___children',
  albums___children___children = 'albums___children___children',
  albums___children___children___id = 'albums___children___children___id',
  albums___children___children___children = 'albums___children___children___children',
  albums___children___internal___content = 'albums___children___internal___content',
  albums___children___internal___contentDigest = 'albums___children___internal___contentDigest',
  albums___children___internal___description = 'albums___children___internal___description',
  albums___children___internal___fieldOwners = 'albums___children___internal___fieldOwners',
  albums___children___internal___ignoreType = 'albums___children___internal___ignoreType',
  albums___children___internal___mediaType = 'albums___children___internal___mediaType',
  albums___children___internal___owner = 'albums___children___internal___owner',
  albums___children___internal___type = 'albums___children___internal___type',
  albums___internal___content = 'albums___internal___content',
  albums___internal___contentDigest = 'albums___internal___contentDigest',
  albums___internal___description = 'albums___internal___description',
  albums___internal___fieldOwners = 'albums___internal___fieldOwners',
  albums___internal___ignoreType = 'albums___internal___ignoreType',
  albums___internal___mediaType = 'albums___internal___mediaType',
  albums___internal___owner = 'albums___internal___owner',
  albums___internal___type = 'albums___internal___type',
  albums___title = 'albums___title',
  albums___images = 'albums___images',
  albums___images___url___sourceInstanceName = 'albums___images___url___sourceInstanceName',
  albums___images___url___absolutePath = 'albums___images___url___absolutePath',
  albums___images___url___relativePath = 'albums___images___url___relativePath',
  albums___images___url___extension = 'albums___images___url___extension',
  albums___images___url___size = 'albums___images___url___size',
  albums___images___url___prettySize = 'albums___images___url___prettySize',
  albums___images___url___modifiedTime = 'albums___images___url___modifiedTime',
  albums___images___url___accessTime = 'albums___images___url___accessTime',
  albums___images___url___changeTime = 'albums___images___url___changeTime',
  albums___images___url___birthTime = 'albums___images___url___birthTime',
  albums___images___url___root = 'albums___images___url___root',
  albums___images___url___dir = 'albums___images___url___dir',
  albums___images___url___base = 'albums___images___url___base',
  albums___images___url___ext = 'albums___images___url___ext',
  albums___images___url___name = 'albums___images___url___name',
  albums___images___url___relativeDirectory = 'albums___images___url___relativeDirectory',
  albums___images___url___dev = 'albums___images___url___dev',
  albums___images___url___mode = 'albums___images___url___mode',
  albums___images___url___nlink = 'albums___images___url___nlink',
  albums___images___url___uid = 'albums___images___url___uid',
  albums___images___url___gid = 'albums___images___url___gid',
  albums___images___url___rdev = 'albums___images___url___rdev',
  albums___images___url___ino = 'albums___images___url___ino',
  albums___images___url___atimeMs = 'albums___images___url___atimeMs',
  albums___images___url___mtimeMs = 'albums___images___url___mtimeMs',
  albums___images___url___ctimeMs = 'albums___images___url___ctimeMs',
  albums___images___url___atime = 'albums___images___url___atime',
  albums___images___url___mtime = 'albums___images___url___mtime',
  albums___images___url___ctime = 'albums___images___url___ctime',
  albums___images___url___birthtime = 'albums___images___url___birthtime',
  albums___images___url___birthtimeMs = 'albums___images___url___birthtimeMs',
  albums___images___url___blksize = 'albums___images___url___blksize',
  albums___images___url___blocks = 'albums___images___url___blocks',
  albums___images___url___publicURL = 'albums___images___url___publicURL',
  albums___images___url___childrenImageSharp = 'albums___images___url___childrenImageSharp',
  albums___images___url___childrenSeriesJson = 'albums___images___url___childrenSeriesJson',
  albums___images___url___childrenAboutJson = 'albums___images___url___childrenAboutJson',
  albums___images___url___childrenBackstageJson = 'albums___images___url___childrenBackstageJson',
  albums___images___url___childrenPicsJson = 'albums___images___url___childrenPicsJson',
  albums___images___url___childrenContactsJson = 'albums___images___url___childrenContactsJson',
  albums___images___url___childrenAlbumsJson = 'albums___images___url___childrenAlbumsJson',
  albums___images___url___id = 'albums___images___url___id',
  albums___images___url___children = 'albums___images___url___children',
  albums___images___cover = 'albums___images___cover',
  albums___description = 'albums___description',
  albums___background = 'albums___background',
  albums___fields___slug = 'albums___fields___slug',
  albums___gatsbyPath = 'albums___gatsbyPath',
  title = 'title',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export interface SeriesJsonFilterInput {
  readonly albums: Maybe<AlbumsJsonFilterListInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
}

export interface SeriesJsonFilterListInput {
  readonly elemMatch: Maybe<SeriesJsonFilterInput>;
}

export interface SeriesJsonGroupConnection {
  readonly __typename?: 'SeriesJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SeriesJsonEdge>;
  readonly nodes: ReadonlyArray<SeriesJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface SeriesJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SeriesJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface Site extends Node {
  readonly __typename?: 'Site';
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly flags: Maybe<SiteFlags>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
}


export interface SiteBuildTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}

export interface SiteBuildMetadata extends Node {
  readonly __typename?: 'SiteBuildMetadata';
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
}


export interface SiteBuildMetadataBuildTimeArgs {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
}

export interface SiteBuildMetadataConnection {
  readonly __typename?: 'SiteBuildMetadataConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
}


export interface SiteBuildMetadataConnectionDistinctArgs {
  field: SiteBuildMetadataFieldsEnum;
}


export interface SiteBuildMetadataConnectionMaxArgs {
  field: SiteBuildMetadataFieldsEnum;
}


export interface SiteBuildMetadataConnectionMinArgs {
  field: SiteBuildMetadataFieldsEnum;
}


export interface SiteBuildMetadataConnectionSumArgs {
  field: SiteBuildMetadataFieldsEnum;
}


export interface SiteBuildMetadataConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
}

export interface SiteBuildMetadataEdge {
  readonly __typename?: 'SiteBuildMetadataEdge';
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
}

export enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime'
}

export interface SiteBuildMetadataFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
}

export interface SiteBuildMetadataGroupConnection {
  readonly __typename?: 'SiteBuildMetadataGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface SiteBuildMetadataSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface SiteConnection {
  readonly __typename?: 'SiteConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
}


export interface SiteConnectionDistinctArgs {
  field: SiteFieldsEnum;
}


export interface SiteConnectionMaxArgs {
  field: SiteFieldsEnum;
}


export interface SiteConnectionMinArgs {
  field: SiteFieldsEnum;
}


export interface SiteConnectionSumArgs {
  field: SiteFieldsEnum;
}


export interface SiteConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
}

export interface SiteEdge {
  readonly __typename?: 'SiteEdge';
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
}

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  port = 'port',
  host = 'host',
  flags___FAST_DEV = 'flags___FAST_DEV',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export interface SiteFilterInput {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
}

export interface SiteFlags {
  readonly __typename?: 'SiteFlags';
  readonly FAST_DEV: Maybe<Scalars['Boolean']>;
}

export interface SiteFlagsFilterInput {
  readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>;
}

export interface SiteFunction extends Node {
  readonly __typename?: 'SiteFunction';
  readonly apiRoute: Scalars['String'];
  readonly originalFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
}

export interface SiteFunctionConnection {
  readonly __typename?: 'SiteFunctionConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
}


export interface SiteFunctionConnectionDistinctArgs {
  field: SiteFunctionFieldsEnum;
}


export interface SiteFunctionConnectionMaxArgs {
  field: SiteFunctionFieldsEnum;
}


export interface SiteFunctionConnectionMinArgs {
  field: SiteFunctionFieldsEnum;
}


export interface SiteFunctionConnectionSumArgs {
  field: SiteFunctionFieldsEnum;
}


export interface SiteFunctionConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
}

export interface SiteFunctionEdge {
  readonly __typename?: 'SiteFunctionEdge';
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
}

export enum SiteFunctionFieldsEnum {
  apiRoute = 'apiRoute',
  originalFilePath = 'originalFilePath',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export interface SiteFunctionFilterInput {
  readonly apiRoute: Maybe<StringQueryOperatorInput>;
  readonly originalFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
}

export interface SiteFunctionGroupConnection {
  readonly __typename?: 'SiteFunctionGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface SiteFunctionSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface SiteGroupConnection {
  readonly __typename?: 'SiteGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface SitePage extends Node {
  readonly __typename?: 'SitePage';
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
}

export interface SitePageConnection {
  readonly __typename?: 'SitePageConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
}


export interface SitePageConnectionDistinctArgs {
  field: SitePageFieldsEnum;
}


export interface SitePageConnectionMaxArgs {
  field: SitePageFieldsEnum;
}


export interface SitePageConnectionMinArgs {
  field: SitePageFieldsEnum;
}


export interface SitePageConnectionSumArgs {
  field: SitePageFieldsEnum;
}


export interface SitePageConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
}

export interface SitePageContext {
  readonly __typename?: 'SitePageContext';
  readonly id: Maybe<Scalars['String']>;
  readonly fields__slug: Maybe<Scalars['String']>;
  readonly _xparams: Maybe<SitePageContext_Xparams>;
}

export interface SitePageContextFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly fields__slug: Maybe<StringQueryOperatorInput>;
  readonly _xparams: Maybe<SitePageContext_XparamsFilterInput>;
}

export interface SitePageContext_Xparams {
  readonly __typename?: 'SitePageContext_xparams';
  readonly fields__slug: Maybe<Scalars['String']>;
}

export interface SitePageContext_XparamsFilterInput {
  readonly fields__slug: Maybe<StringQueryOperatorInput>;
}

export interface SitePageEdge {
  readonly __typename?: 'SitePageEdge';
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
}

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context___id',
  context___fields__slug = 'context___fields__slug',
  context____xparams___fields__slug = 'context____xparams___fields__slug',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___modulePath = 'pluginCreator___pluginOptions___modulePath',
  pluginCreator___pluginOptions___manualInit = 'pluginCreator___pluginOptions___manualInit',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId'
}

export interface SitePageFilterInput {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
}

export interface SitePageGroupConnection {
  readonly __typename?: 'SitePageGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface SitePageSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface SitePlugin extends Node {
  readonly __typename?: 'SitePlugin';
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
}

export interface SitePluginConnection {
  readonly __typename?: 'SitePluginConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
}


export interface SitePluginConnectionDistinctArgs {
  field: SitePluginFieldsEnum;
}


export interface SitePluginConnectionMaxArgs {
  field: SitePluginFieldsEnum;
}


export interface SitePluginConnectionMinArgs {
  field: SitePluginFieldsEnum;
}


export interface SitePluginConnectionSumArgs {
  field: SitePluginFieldsEnum;
}


export interface SitePluginConnectionGroupArgs {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
}

export interface SitePluginEdge {
  readonly __typename?: 'SitePluginEdge';
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
}

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___cssLoaderOptions___modules___namedExport = 'pluginOptions___cssLoaderOptions___modules___namedExport',
  pluginOptions___modulePath = 'pluginOptions___modulePath',
  pluginOptions___manualInit = 'pluginOptions___manualInit',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export interface SitePluginFilterInput {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
}

export interface SitePluginGroupConnection {
  readonly __typename?: 'SitePluginGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
}

export interface SitePluginPackageJson {
  readonly __typename?: 'SitePluginPackageJson';
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

export interface SitePluginPackageJsonDependencies {
  readonly __typename?: 'SitePluginPackageJsonDependencies';
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
}

export interface SitePluginPackageJsonDependenciesFilterInput {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDependenciesFilterListInput {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDevDependencies {
  readonly __typename?: 'SitePluginPackageJsonDevDependencies';
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
}

export interface SitePluginPackageJsonDevDependenciesFilterInput {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterListInput {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
}

export interface SitePluginPackageJsonFilterInput {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonPeerDependencies {
  readonly __typename?: 'SitePluginPackageJsonPeerDependencies';
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterInput {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
}

export interface SitePluginPluginOptions {
  readonly __typename?: 'SitePluginPluginOptions';
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly cssLoaderOptions: Maybe<SitePluginPluginOptionsCssLoaderOptions>;
  readonly modulePath: Maybe<Scalars['String']>;
  readonly manualInit: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
}

export interface SitePluginPluginOptionsCssLoaderOptions {
  readonly __typename?: 'SitePluginPluginOptionsCssLoaderOptions';
  readonly modules: Maybe<SitePluginPluginOptionsCssLoaderOptionsModules>;
}

export interface SitePluginPluginOptionsCssLoaderOptionsFilterInput {
  readonly modules: Maybe<SitePluginPluginOptionsCssLoaderOptionsModulesFilterInput>;
}

export interface SitePluginPluginOptionsCssLoaderOptionsModules {
  readonly __typename?: 'SitePluginPluginOptionsCssLoaderOptionsModules';
  readonly namedExport: Maybe<Scalars['Boolean']>;
}

export interface SitePluginPluginOptionsCssLoaderOptionsModulesFilterInput {
  readonly namedExport: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginPluginOptionsFilterInput {
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly cssLoaderOptions: Maybe<SitePluginPluginOptionsCssLoaderOptionsFilterInput>;
  readonly modulePath: Maybe<StringQueryOperatorInput>;
  readonly manualInit: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface SiteSiteMetadata {
  readonly __typename?: 'SiteSiteMetadata';
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
}

export interface SiteSiteMetadataFilterInput {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
}

export interface SiteSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface StringQueryOperatorInput {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
}

export interface TransformOptions {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
}

export interface WebPOptions {
  readonly quality: Maybe<Scalars['Int']>;
}

export type GatsbyImageSharpFixedFragment = { readonly __typename?: 'ImageSharpFixed', readonly base64: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { readonly __typename?: 'ImageSharpFixed', readonly tracedSVG: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { readonly __typename?: 'ImageSharpFixed', readonly base64: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp: Maybe<string>, readonly srcSetWebp: Maybe<string> };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { readonly __typename?: 'ImageSharpFixed', readonly tracedSVG: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp: Maybe<string>, readonly srcSetWebp: Maybe<string> };

export type GatsbyImageSharpFixed_NoBase64Fragment = { readonly __typename?: 'ImageSharpFixed', readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { readonly __typename?: 'ImageSharpFixed', readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp: Maybe<string>, readonly srcSetWebp: Maybe<string> };

export type GatsbyImageSharpFluidFragment = { readonly __typename?: 'ImageSharpFluid', readonly base64: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { readonly __typename?: 'ImageSharpFluid', readonly maxHeight: number, readonly maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { readonly __typename?: 'ImageSharpFluid', readonly tracedSVG: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { readonly __typename?: 'ImageSharpFluid', readonly base64: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp: Maybe<string>, readonly srcSetWebp: Maybe<string>, readonly sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { readonly __typename?: 'ImageSharpFluid', readonly tracedSVG: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp: Maybe<string>, readonly srcSetWebp: Maybe<string>, readonly sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { readonly __typename?: 'ImageSharpFluid', readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { readonly __typename?: 'ImageSharpFluid', readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp: Maybe<string>, readonly srcSetWebp: Maybe<string>, readonly sizes: string };

export type SeriesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SeriesPageQuery = { readonly __typename?: 'Query', readonly page: Maybe<{ readonly __typename?: 'SeriesJson', readonly title: Maybe<string>, readonly albums: Maybe<ReadonlyArray<Maybe<{ readonly __typename?: 'AlbumsJson', readonly background: Maybe<string>, readonly description: Maybe<string>, readonly title: Maybe<string>, readonly fields: Maybe<{ readonly __typename?: 'AlbumsJsonFields', readonly slug: Maybe<string> }>, readonly images: Maybe<ReadonlyArray<Maybe<{ readonly __typename?: 'AlbumsJsonImages', readonly cover: Maybe<boolean>, readonly url: Maybe<{ readonly __typename?: 'File', readonly childImageSharp: Maybe<{ readonly __typename?: 'ImageSharp', readonly gatsbyImageData: IGatsbyImageData }> }> }>>> }>>> }> };

export type PicsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type PicsPageQuery = { readonly __typename?: 'Query', readonly page: Maybe<{ readonly __typename?: 'PicsJson', readonly title: Maybe<string>, readonly pics: Maybe<ReadonlyArray<Maybe<{ readonly __typename?: 'PicsJsonPics', readonly background: Maybe<string>, readonly title: Maybe<string>, readonly image: Maybe<{ readonly __typename?: 'File', readonly childImageSharp: Maybe<{ readonly __typename?: 'ImageSharp', readonly gatsbyImageData: IGatsbyImageData }> }> }>>> }> };

export type AlbumPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AlbumPageQuery = { readonly __typename?: 'Query', readonly content: Maybe<{ readonly __typename?: 'AlbumsJson', readonly title: Maybe<string>, readonly description: Maybe<string>, readonly images: Maybe<ReadonlyArray<Maybe<{ readonly __typename?: 'AlbumsJsonImages', readonly url: Maybe<{ readonly __typename?: 'File', readonly childImageSharp: Maybe<{ readonly __typename?: 'ImageSharp', readonly gatsbyImageData: IGatsbyImageData }> }> }>>> }> };
