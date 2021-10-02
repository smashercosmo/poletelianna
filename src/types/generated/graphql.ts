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
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly speed: Maybe<Scalars['Int']>;
}

export interface AboutJson extends Node {
  readonly __typename?: 'AboutJson';
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
}

export interface AboutJsonConnection {
  readonly __typename?: 'AboutJsonConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<AboutJsonEdge>;
  readonly group: ReadonlyArray<AboutJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<AboutJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface AboutJsonConnectionDistinctArgs {
  field: AboutJsonFieldsEnum;
}


export interface AboutJsonConnectionGroupArgs {
  field: AboutJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface AboutJsonEdge {
  readonly __typename?: 'AboutJsonEdge';
  readonly next: Maybe<AboutJson>;
  readonly node: AboutJson;
  readonly previous: Maybe<AboutJson>;
}

export enum AboutJsonFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export interface AboutJsonFilterInput {
  readonly children: Maybe<NodeFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface AboutJsonFilterListInput {
  readonly elemMatch: Maybe<AboutJsonFilterInput>;
}

export interface AboutJsonGroupConnection {
  readonly __typename?: 'AboutJsonGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<AboutJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<AboutJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<AboutJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface AboutJsonGroupConnectionDistinctArgs {
  field: AboutJsonFieldsEnum;
}


export interface AboutJsonGroupConnectionGroupArgs {
  field: AboutJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface AboutJsonGroupConnectionMaxArgs {
  field: AboutJsonFieldsEnum;
}


export interface AboutJsonGroupConnectionMinArgs {
  field: AboutJsonFieldsEnum;
}


export interface AboutJsonGroupConnectionSumArgs {
  field: AboutJsonFieldsEnum;
}

export interface AboutJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<AboutJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface AlbumsJson extends Node {
  readonly __typename?: 'AlbumsJson';
  readonly background: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly fields: Maybe<AlbumsJsonFields>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly images: Maybe<ReadonlyArray<Maybe<AlbumsJsonImages>>>;
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
}


export interface AlbumsJsonGatsbyPathArgs {
  filePath: Maybe<Scalars['String']>;
}

export interface AlbumsJsonConnection {
  readonly __typename?: 'AlbumsJsonConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<AlbumsJsonEdge>;
  readonly group: ReadonlyArray<AlbumsJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<AlbumsJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface AlbumsJsonConnectionDistinctArgs {
  field: AlbumsJsonFieldsEnum;
}


export interface AlbumsJsonConnectionGroupArgs {
  field: AlbumsJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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
  background = 'background',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  fields___slug = 'fields___slug',
  gatsbyPath = 'gatsbyPath',
  id = 'id',
  images = 'images',
  images___cover = 'images___cover',
  images___url___absolutePath = 'images___url___absolutePath',
  images___url___accessTime = 'images___url___accessTime',
  images___url___atime = 'images___url___atime',
  images___url___atimeMs = 'images___url___atimeMs',
  images___url___base = 'images___url___base',
  images___url___birthTime = 'images___url___birthTime',
  images___url___birthtime = 'images___url___birthtime',
  images___url___birthtimeMs = 'images___url___birthtimeMs',
  images___url___blksize = 'images___url___blksize',
  images___url___blocks = 'images___url___blocks',
  images___url___changeTime = 'images___url___changeTime',
  images___url___childAboutJson___children = 'images___url___childAboutJson___children',
  images___url___childAboutJson___id = 'images___url___childAboutJson___id',
  images___url___childAboutJson___title = 'images___url___childAboutJson___title',
  images___url___childAlbumsJson___background = 'images___url___childAlbumsJson___background',
  images___url___childAlbumsJson___children = 'images___url___childAlbumsJson___children',
  images___url___childAlbumsJson___description = 'images___url___childAlbumsJson___description',
  images___url___childAlbumsJson___gatsbyPath = 'images___url___childAlbumsJson___gatsbyPath',
  images___url___childAlbumsJson___id = 'images___url___childAlbumsJson___id',
  images___url___childAlbumsJson___images = 'images___url___childAlbumsJson___images',
  images___url___childAlbumsJson___title = 'images___url___childAlbumsJson___title',
  images___url___childBackstageJson___children = 'images___url___childBackstageJson___children',
  images___url___childBackstageJson___id = 'images___url___childBackstageJson___id',
  images___url___childBackstageJson___title = 'images___url___childBackstageJson___title',
  images___url___childContactsJson___children = 'images___url___childContactsJson___children',
  images___url___childContactsJson___id = 'images___url___childContactsJson___id',
  images___url___childContactsJson___title = 'images___url___childContactsJson___title',
  images___url___childImageSharp___children = 'images___url___childImageSharp___children',
  images___url___childImageSharp___gatsbyImageData = 'images___url___childImageSharp___gatsbyImageData',
  images___url___childImageSharp___id = 'images___url___childImageSharp___id',
  images___url___childPicsJson___children = 'images___url___childPicsJson___children',
  images___url___childPicsJson___id = 'images___url___childPicsJson___id',
  images___url___childPicsJson___pictures = 'images___url___childPicsJson___pictures',
  images___url___childPicsJson___title = 'images___url___childPicsJson___title',
  images___url___childPicturesJson___background = 'images___url___childPicturesJson___background',
  images___url___childPicturesJson___children = 'images___url___childPicturesJson___children',
  images___url___childPicturesJson___description = 'images___url___childPicturesJson___description',
  images___url___childPicturesJson___id = 'images___url___childPicturesJson___id',
  images___url___childPicturesJson___title = 'images___url___childPicturesJson___title',
  images___url___childSeriesJson___albums = 'images___url___childSeriesJson___albums',
  images___url___childSeriesJson___children = 'images___url___childSeriesJson___children',
  images___url___childSeriesJson___id = 'images___url___childSeriesJson___id',
  images___url___childSeriesJson___title = 'images___url___childSeriesJson___title',
  images___url___children = 'images___url___children',
  images___url___childrenAboutJson = 'images___url___childrenAboutJson',
  images___url___childrenAboutJson___children = 'images___url___childrenAboutJson___children',
  images___url___childrenAboutJson___id = 'images___url___childrenAboutJson___id',
  images___url___childrenAboutJson___title = 'images___url___childrenAboutJson___title',
  images___url___childrenAlbumsJson = 'images___url___childrenAlbumsJson',
  images___url___childrenAlbumsJson___background = 'images___url___childrenAlbumsJson___background',
  images___url___childrenAlbumsJson___children = 'images___url___childrenAlbumsJson___children',
  images___url___childrenAlbumsJson___description = 'images___url___childrenAlbumsJson___description',
  images___url___childrenAlbumsJson___gatsbyPath = 'images___url___childrenAlbumsJson___gatsbyPath',
  images___url___childrenAlbumsJson___id = 'images___url___childrenAlbumsJson___id',
  images___url___childrenAlbumsJson___images = 'images___url___childrenAlbumsJson___images',
  images___url___childrenAlbumsJson___title = 'images___url___childrenAlbumsJson___title',
  images___url___childrenBackstageJson = 'images___url___childrenBackstageJson',
  images___url___childrenBackstageJson___children = 'images___url___childrenBackstageJson___children',
  images___url___childrenBackstageJson___id = 'images___url___childrenBackstageJson___id',
  images___url___childrenBackstageJson___title = 'images___url___childrenBackstageJson___title',
  images___url___childrenContactsJson = 'images___url___childrenContactsJson',
  images___url___childrenContactsJson___children = 'images___url___childrenContactsJson___children',
  images___url___childrenContactsJson___id = 'images___url___childrenContactsJson___id',
  images___url___childrenContactsJson___title = 'images___url___childrenContactsJson___title',
  images___url___childrenImageSharp = 'images___url___childrenImageSharp',
  images___url___childrenImageSharp___children = 'images___url___childrenImageSharp___children',
  images___url___childrenImageSharp___gatsbyImageData = 'images___url___childrenImageSharp___gatsbyImageData',
  images___url___childrenImageSharp___id = 'images___url___childrenImageSharp___id',
  images___url___childrenPicsJson = 'images___url___childrenPicsJson',
  images___url___childrenPicsJson___children = 'images___url___childrenPicsJson___children',
  images___url___childrenPicsJson___id = 'images___url___childrenPicsJson___id',
  images___url___childrenPicsJson___pictures = 'images___url___childrenPicsJson___pictures',
  images___url___childrenPicsJson___title = 'images___url___childrenPicsJson___title',
  images___url___childrenPicturesJson = 'images___url___childrenPicturesJson',
  images___url___childrenPicturesJson___background = 'images___url___childrenPicturesJson___background',
  images___url___childrenPicturesJson___children = 'images___url___childrenPicturesJson___children',
  images___url___childrenPicturesJson___description = 'images___url___childrenPicturesJson___description',
  images___url___childrenPicturesJson___id = 'images___url___childrenPicturesJson___id',
  images___url___childrenPicturesJson___title = 'images___url___childrenPicturesJson___title',
  images___url___childrenSeriesJson = 'images___url___childrenSeriesJson',
  images___url___childrenSeriesJson___albums = 'images___url___childrenSeriesJson___albums',
  images___url___childrenSeriesJson___children = 'images___url___childrenSeriesJson___children',
  images___url___childrenSeriesJson___id = 'images___url___childrenSeriesJson___id',
  images___url___childrenSeriesJson___title = 'images___url___childrenSeriesJson___title',
  images___url___children___children = 'images___url___children___children',
  images___url___children___id = 'images___url___children___id',
  images___url___ctime = 'images___url___ctime',
  images___url___ctimeMs = 'images___url___ctimeMs',
  images___url___dev = 'images___url___dev',
  images___url___dir = 'images___url___dir',
  images___url___ext = 'images___url___ext',
  images___url___extension = 'images___url___extension',
  images___url___gid = 'images___url___gid',
  images___url___id = 'images___url___id',
  images___url___ino = 'images___url___ino',
  images___url___internal___content = 'images___url___internal___content',
  images___url___internal___contentDigest = 'images___url___internal___contentDigest',
  images___url___internal___description = 'images___url___internal___description',
  images___url___internal___fieldOwners = 'images___url___internal___fieldOwners',
  images___url___internal___ignoreType = 'images___url___internal___ignoreType',
  images___url___internal___mediaType = 'images___url___internal___mediaType',
  images___url___internal___owner = 'images___url___internal___owner',
  images___url___internal___type = 'images___url___internal___type',
  images___url___mode = 'images___url___mode',
  images___url___modifiedTime = 'images___url___modifiedTime',
  images___url___mtime = 'images___url___mtime',
  images___url___mtimeMs = 'images___url___mtimeMs',
  images___url___name = 'images___url___name',
  images___url___nlink = 'images___url___nlink',
  images___url___parent___children = 'images___url___parent___children',
  images___url___parent___id = 'images___url___parent___id',
  images___url___prettySize = 'images___url___prettySize',
  images___url___publicURL = 'images___url___publicURL',
  images___url___rdev = 'images___url___rdev',
  images___url___relativeDirectory = 'images___url___relativeDirectory',
  images___url___relativePath = 'images___url___relativePath',
  images___url___root = 'images___url___root',
  images___url___size = 'images___url___size',
  images___url___sourceInstanceName = 'images___url___sourceInstanceName',
  images___url___uid = 'images___url___uid',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export interface AlbumsJsonFieldsFilterInput {
  readonly slug: Maybe<StringQueryOperatorInput>;
}

export interface AlbumsJsonFilterInput {
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<AlbumsJsonFieldsFilterInput>;
  readonly gatsbyPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly images: Maybe<AlbumsJsonImagesFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface AlbumsJsonFilterListInput {
  readonly elemMatch: Maybe<AlbumsJsonFilterInput>;
}

export interface AlbumsJsonGroupConnection {
  readonly __typename?: 'AlbumsJsonGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<AlbumsJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<AlbumsJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<AlbumsJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface AlbumsJsonGroupConnectionDistinctArgs {
  field: AlbumsJsonFieldsEnum;
}


export interface AlbumsJsonGroupConnectionGroupArgs {
  field: AlbumsJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface AlbumsJsonGroupConnectionMaxArgs {
  field: AlbumsJsonFieldsEnum;
}


export interface AlbumsJsonGroupConnectionMinArgs {
  field: AlbumsJsonFieldsEnum;
}


export interface AlbumsJsonGroupConnectionSumArgs {
  field: AlbumsJsonFieldsEnum;
}

export interface AlbumsJsonImages {
  readonly __typename?: 'AlbumsJsonImages';
  readonly cover: Maybe<Scalars['Boolean']>;
  readonly url: Maybe<File>;
}

export interface AlbumsJsonImagesFilterInput {
  readonly cover: Maybe<BooleanQueryOperatorInput>;
  readonly url: Maybe<FileFilterInput>;
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
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
}

export interface BackstageJsonConnection {
  readonly __typename?: 'BackstageJsonConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<BackstageJsonEdge>;
  readonly group: ReadonlyArray<BackstageJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<BackstageJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface BackstageJsonConnectionDistinctArgs {
  field: BackstageJsonFieldsEnum;
}


export interface BackstageJsonConnectionGroupArgs {
  field: BackstageJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface BackstageJsonEdge {
  readonly __typename?: 'BackstageJsonEdge';
  readonly next: Maybe<BackstageJson>;
  readonly node: BackstageJson;
  readonly previous: Maybe<BackstageJson>;
}

export enum BackstageJsonFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export interface BackstageJsonFilterInput {
  readonly children: Maybe<NodeFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface BackstageJsonFilterListInput {
  readonly elemMatch: Maybe<BackstageJsonFilterInput>;
}

export interface BackstageJsonGroupConnection {
  readonly __typename?: 'BackstageJsonGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<BackstageJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<BackstageJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<BackstageJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface BackstageJsonGroupConnectionDistinctArgs {
  field: BackstageJsonFieldsEnum;
}


export interface BackstageJsonGroupConnectionGroupArgs {
  field: BackstageJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface BackstageJsonGroupConnectionMaxArgs {
  field: BackstageJsonFieldsEnum;
}


export interface BackstageJsonGroupConnectionMinArgs {
  field: BackstageJsonFieldsEnum;
}


export interface BackstageJsonGroupConnectionSumArgs {
  field: BackstageJsonFieldsEnum;
}

export interface BackstageJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<BackstageJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface BlurredOptions {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
}

export interface BooleanQueryOperatorInput {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
}

export interface ContactsJson extends Node {
  readonly __typename?: 'ContactsJson';
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
}

export interface ContactsJsonConnection {
  readonly __typename?: 'ContactsJsonConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContactsJsonEdge>;
  readonly group: ReadonlyArray<ContactsJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContactsJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface ContactsJsonConnectionDistinctArgs {
  field: ContactsJsonFieldsEnum;
}


export interface ContactsJsonConnectionGroupArgs {
  field: ContactsJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface ContactsJsonEdge {
  readonly __typename?: 'ContactsJsonEdge';
  readonly next: Maybe<ContactsJson>;
  readonly node: ContactsJson;
  readonly previous: Maybe<ContactsJson>;
}

export enum ContactsJsonFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export interface ContactsJsonFilterInput {
  readonly children: Maybe<NodeFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface ContactsJsonFilterListInput {
  readonly elemMatch: Maybe<ContactsJsonFilterInput>;
}

export interface ContactsJsonGroupConnection {
  readonly __typename?: 'ContactsJsonGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContactsJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContactsJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContactsJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface ContactsJsonGroupConnectionDistinctArgs {
  field: ContactsJsonFieldsEnum;
}


export interface ContactsJsonGroupConnectionGroupArgs {
  field: ContactsJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface ContactsJsonGroupConnectionMaxArgs {
  field: ContactsJsonFieldsEnum;
}


export interface ContactsJsonGroupConnectionMinArgs {
  field: ContactsJsonFieldsEnum;
}


export interface ContactsJsonGroupConnectionSumArgs {
  field: ContactsJsonFieldsEnum;
}

export interface ContactsJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContactsJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface DateQueryOperatorInput {
  readonly eq: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
}

export interface Directory extends Node {
  readonly __typename?: 'Directory';
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
}


export interface DirectoryAccessTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryAtimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryBirthTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryChangeTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryCtimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryModifiedTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface DirectoryMtimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}

export interface DirectoryConnection {
  readonly __typename?: 'DirectoryConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface DirectoryConnectionDistinctArgs {
  field: DirectoryFieldsEnum;
}


export interface DirectoryConnectionGroupArgs {
  field: DirectoryFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface DirectoryEdge {
  readonly __typename?: 'DirectoryEdge';
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
}

export enum DirectoryFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export interface DirectoryFilterInput {
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
}

export interface DirectoryGroupConnection {
  readonly __typename?: 'DirectoryGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface DirectoryGroupConnectionDistinctArgs {
  field: DirectoryFieldsEnum;
}


export interface DirectoryGroupConnectionGroupArgs {
  field: DirectoryFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface DirectoryGroupConnectionMaxArgs {
  field: DirectoryFieldsEnum;
}


export interface DirectoryGroupConnectionMinArgs {
  field: DirectoryFieldsEnum;
}


export interface DirectoryGroupConnectionSumArgs {
  field: DirectoryFieldsEnum;
}

export interface DirectorySortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface DuotoneGradient {
  readonly highlight: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
}

export interface File extends Node {
  readonly __typename?: 'File';
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type AboutJson or null if there are no children of given type on this node */
  readonly childAboutJson: Maybe<AboutJson>;
  /** Returns the first child node of type AlbumsJson or null if there are no children of given type on this node */
  readonly childAlbumsJson: Maybe<AlbumsJson>;
  /** Returns the first child node of type BackstageJson or null if there are no children of given type on this node */
  readonly childBackstageJson: Maybe<BackstageJson>;
  /** Returns the first child node of type ContactsJson or null if there are no children of given type on this node */
  readonly childContactsJson: Maybe<ContactsJson>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns the first child node of type PicsJson or null if there are no children of given type on this node */
  readonly childPicsJson: Maybe<PicsJson>;
  /** Returns the first child node of type PicturesJson or null if there are no children of given type on this node */
  readonly childPicturesJson: Maybe<PicturesJson>;
  /** Returns the first child node of type SeriesJson or null if there are no children of given type on this node */
  readonly childSeriesJson: Maybe<SeriesJson>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type AboutJson */
  readonly childrenAboutJson: Maybe<ReadonlyArray<Maybe<AboutJson>>>;
  /** Returns all children nodes filtered by type AlbumsJson */
  readonly childrenAlbumsJson: Maybe<ReadonlyArray<Maybe<AlbumsJson>>>;
  /** Returns all children nodes filtered by type BackstageJson */
  readonly childrenBackstageJson: Maybe<ReadonlyArray<Maybe<BackstageJson>>>;
  /** Returns all children nodes filtered by type ContactsJson */
  readonly childrenContactsJson: Maybe<ReadonlyArray<Maybe<ContactsJson>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type PicsJson */
  readonly childrenPicsJson: Maybe<ReadonlyArray<Maybe<PicsJson>>>;
  /** Returns all children nodes filtered by type PicturesJson */
  readonly childrenPicturesJson: Maybe<ReadonlyArray<Maybe<PicturesJson>>>;
  /** Returns all children nodes filtered by type SeriesJson */
  readonly childrenSeriesJson: Maybe<ReadonlyArray<Maybe<SeriesJson>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
}


export interface FileAccessTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileAtimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileBirthTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileChangeTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileCtimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileModifiedTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}


export interface FileMtimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}

export interface FileConnection {
  readonly __typename?: 'FileConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface FileConnectionDistinctArgs {
  field: FileFieldsEnum;
}


export interface FileConnectionGroupArgs {
  field: FileFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface FileEdge {
  readonly __typename?: 'FileEdge';
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
}

export enum FileFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  changeTime = 'changeTime',
  childAboutJson___children = 'childAboutJson___children',
  childAboutJson___children___children = 'childAboutJson___children___children',
  childAboutJson___children___children___children = 'childAboutJson___children___children___children',
  childAboutJson___children___children___id = 'childAboutJson___children___children___id',
  childAboutJson___children___id = 'childAboutJson___children___id',
  childAboutJson___children___internal___content = 'childAboutJson___children___internal___content',
  childAboutJson___children___internal___contentDigest = 'childAboutJson___children___internal___contentDigest',
  childAboutJson___children___internal___description = 'childAboutJson___children___internal___description',
  childAboutJson___children___internal___fieldOwners = 'childAboutJson___children___internal___fieldOwners',
  childAboutJson___children___internal___ignoreType = 'childAboutJson___children___internal___ignoreType',
  childAboutJson___children___internal___mediaType = 'childAboutJson___children___internal___mediaType',
  childAboutJson___children___internal___owner = 'childAboutJson___children___internal___owner',
  childAboutJson___children___internal___type = 'childAboutJson___children___internal___type',
  childAboutJson___children___parent___children = 'childAboutJson___children___parent___children',
  childAboutJson___children___parent___id = 'childAboutJson___children___parent___id',
  childAboutJson___id = 'childAboutJson___id',
  childAboutJson___internal___content = 'childAboutJson___internal___content',
  childAboutJson___internal___contentDigest = 'childAboutJson___internal___contentDigest',
  childAboutJson___internal___description = 'childAboutJson___internal___description',
  childAboutJson___internal___fieldOwners = 'childAboutJson___internal___fieldOwners',
  childAboutJson___internal___ignoreType = 'childAboutJson___internal___ignoreType',
  childAboutJson___internal___mediaType = 'childAboutJson___internal___mediaType',
  childAboutJson___internal___owner = 'childAboutJson___internal___owner',
  childAboutJson___internal___type = 'childAboutJson___internal___type',
  childAboutJson___parent___children = 'childAboutJson___parent___children',
  childAboutJson___parent___children___children = 'childAboutJson___parent___children___children',
  childAboutJson___parent___children___id = 'childAboutJson___parent___children___id',
  childAboutJson___parent___id = 'childAboutJson___parent___id',
  childAboutJson___parent___internal___content = 'childAboutJson___parent___internal___content',
  childAboutJson___parent___internal___contentDigest = 'childAboutJson___parent___internal___contentDigest',
  childAboutJson___parent___internal___description = 'childAboutJson___parent___internal___description',
  childAboutJson___parent___internal___fieldOwners = 'childAboutJson___parent___internal___fieldOwners',
  childAboutJson___parent___internal___ignoreType = 'childAboutJson___parent___internal___ignoreType',
  childAboutJson___parent___internal___mediaType = 'childAboutJson___parent___internal___mediaType',
  childAboutJson___parent___internal___owner = 'childAboutJson___parent___internal___owner',
  childAboutJson___parent___internal___type = 'childAboutJson___parent___internal___type',
  childAboutJson___parent___parent___children = 'childAboutJson___parent___parent___children',
  childAboutJson___parent___parent___id = 'childAboutJson___parent___parent___id',
  childAboutJson___title = 'childAboutJson___title',
  childAlbumsJson___background = 'childAlbumsJson___background',
  childAlbumsJson___children = 'childAlbumsJson___children',
  childAlbumsJson___children___children = 'childAlbumsJson___children___children',
  childAlbumsJson___children___children___children = 'childAlbumsJson___children___children___children',
  childAlbumsJson___children___children___id = 'childAlbumsJson___children___children___id',
  childAlbumsJson___children___id = 'childAlbumsJson___children___id',
  childAlbumsJson___children___internal___content = 'childAlbumsJson___children___internal___content',
  childAlbumsJson___children___internal___contentDigest = 'childAlbumsJson___children___internal___contentDigest',
  childAlbumsJson___children___internal___description = 'childAlbumsJson___children___internal___description',
  childAlbumsJson___children___internal___fieldOwners = 'childAlbumsJson___children___internal___fieldOwners',
  childAlbumsJson___children___internal___ignoreType = 'childAlbumsJson___children___internal___ignoreType',
  childAlbumsJson___children___internal___mediaType = 'childAlbumsJson___children___internal___mediaType',
  childAlbumsJson___children___internal___owner = 'childAlbumsJson___children___internal___owner',
  childAlbumsJson___children___internal___type = 'childAlbumsJson___children___internal___type',
  childAlbumsJson___children___parent___children = 'childAlbumsJson___children___parent___children',
  childAlbumsJson___children___parent___id = 'childAlbumsJson___children___parent___id',
  childAlbumsJson___description = 'childAlbumsJson___description',
  childAlbumsJson___fields___slug = 'childAlbumsJson___fields___slug',
  childAlbumsJson___gatsbyPath = 'childAlbumsJson___gatsbyPath',
  childAlbumsJson___id = 'childAlbumsJson___id',
  childAlbumsJson___images = 'childAlbumsJson___images',
  childAlbumsJson___images___cover = 'childAlbumsJson___images___cover',
  childAlbumsJson___images___url___absolutePath = 'childAlbumsJson___images___url___absolutePath',
  childAlbumsJson___images___url___accessTime = 'childAlbumsJson___images___url___accessTime',
  childAlbumsJson___images___url___atime = 'childAlbumsJson___images___url___atime',
  childAlbumsJson___images___url___atimeMs = 'childAlbumsJson___images___url___atimeMs',
  childAlbumsJson___images___url___base = 'childAlbumsJson___images___url___base',
  childAlbumsJson___images___url___birthTime = 'childAlbumsJson___images___url___birthTime',
  childAlbumsJson___images___url___birthtime = 'childAlbumsJson___images___url___birthtime',
  childAlbumsJson___images___url___birthtimeMs = 'childAlbumsJson___images___url___birthtimeMs',
  childAlbumsJson___images___url___blksize = 'childAlbumsJson___images___url___blksize',
  childAlbumsJson___images___url___blocks = 'childAlbumsJson___images___url___blocks',
  childAlbumsJson___images___url___changeTime = 'childAlbumsJson___images___url___changeTime',
  childAlbumsJson___images___url___children = 'childAlbumsJson___images___url___children',
  childAlbumsJson___images___url___childrenAboutJson = 'childAlbumsJson___images___url___childrenAboutJson',
  childAlbumsJson___images___url___childrenAlbumsJson = 'childAlbumsJson___images___url___childrenAlbumsJson',
  childAlbumsJson___images___url___childrenBackstageJson = 'childAlbumsJson___images___url___childrenBackstageJson',
  childAlbumsJson___images___url___childrenContactsJson = 'childAlbumsJson___images___url___childrenContactsJson',
  childAlbumsJson___images___url___childrenImageSharp = 'childAlbumsJson___images___url___childrenImageSharp',
  childAlbumsJson___images___url___childrenPicsJson = 'childAlbumsJson___images___url___childrenPicsJson',
  childAlbumsJson___images___url___childrenPicturesJson = 'childAlbumsJson___images___url___childrenPicturesJson',
  childAlbumsJson___images___url___childrenSeriesJson = 'childAlbumsJson___images___url___childrenSeriesJson',
  childAlbumsJson___images___url___ctime = 'childAlbumsJson___images___url___ctime',
  childAlbumsJson___images___url___ctimeMs = 'childAlbumsJson___images___url___ctimeMs',
  childAlbumsJson___images___url___dev = 'childAlbumsJson___images___url___dev',
  childAlbumsJson___images___url___dir = 'childAlbumsJson___images___url___dir',
  childAlbumsJson___images___url___ext = 'childAlbumsJson___images___url___ext',
  childAlbumsJson___images___url___extension = 'childAlbumsJson___images___url___extension',
  childAlbumsJson___images___url___gid = 'childAlbumsJson___images___url___gid',
  childAlbumsJson___images___url___id = 'childAlbumsJson___images___url___id',
  childAlbumsJson___images___url___ino = 'childAlbumsJson___images___url___ino',
  childAlbumsJson___images___url___mode = 'childAlbumsJson___images___url___mode',
  childAlbumsJson___images___url___modifiedTime = 'childAlbumsJson___images___url___modifiedTime',
  childAlbumsJson___images___url___mtime = 'childAlbumsJson___images___url___mtime',
  childAlbumsJson___images___url___mtimeMs = 'childAlbumsJson___images___url___mtimeMs',
  childAlbumsJson___images___url___name = 'childAlbumsJson___images___url___name',
  childAlbumsJson___images___url___nlink = 'childAlbumsJson___images___url___nlink',
  childAlbumsJson___images___url___prettySize = 'childAlbumsJson___images___url___prettySize',
  childAlbumsJson___images___url___publicURL = 'childAlbumsJson___images___url___publicURL',
  childAlbumsJson___images___url___rdev = 'childAlbumsJson___images___url___rdev',
  childAlbumsJson___images___url___relativeDirectory = 'childAlbumsJson___images___url___relativeDirectory',
  childAlbumsJson___images___url___relativePath = 'childAlbumsJson___images___url___relativePath',
  childAlbumsJson___images___url___root = 'childAlbumsJson___images___url___root',
  childAlbumsJson___images___url___size = 'childAlbumsJson___images___url___size',
  childAlbumsJson___images___url___sourceInstanceName = 'childAlbumsJson___images___url___sourceInstanceName',
  childAlbumsJson___images___url___uid = 'childAlbumsJson___images___url___uid',
  childAlbumsJson___internal___content = 'childAlbumsJson___internal___content',
  childAlbumsJson___internal___contentDigest = 'childAlbumsJson___internal___contentDigest',
  childAlbumsJson___internal___description = 'childAlbumsJson___internal___description',
  childAlbumsJson___internal___fieldOwners = 'childAlbumsJson___internal___fieldOwners',
  childAlbumsJson___internal___ignoreType = 'childAlbumsJson___internal___ignoreType',
  childAlbumsJson___internal___mediaType = 'childAlbumsJson___internal___mediaType',
  childAlbumsJson___internal___owner = 'childAlbumsJson___internal___owner',
  childAlbumsJson___internal___type = 'childAlbumsJson___internal___type',
  childAlbumsJson___parent___children = 'childAlbumsJson___parent___children',
  childAlbumsJson___parent___children___children = 'childAlbumsJson___parent___children___children',
  childAlbumsJson___parent___children___id = 'childAlbumsJson___parent___children___id',
  childAlbumsJson___parent___id = 'childAlbumsJson___parent___id',
  childAlbumsJson___parent___internal___content = 'childAlbumsJson___parent___internal___content',
  childAlbumsJson___parent___internal___contentDigest = 'childAlbumsJson___parent___internal___contentDigest',
  childAlbumsJson___parent___internal___description = 'childAlbumsJson___parent___internal___description',
  childAlbumsJson___parent___internal___fieldOwners = 'childAlbumsJson___parent___internal___fieldOwners',
  childAlbumsJson___parent___internal___ignoreType = 'childAlbumsJson___parent___internal___ignoreType',
  childAlbumsJson___parent___internal___mediaType = 'childAlbumsJson___parent___internal___mediaType',
  childAlbumsJson___parent___internal___owner = 'childAlbumsJson___parent___internal___owner',
  childAlbumsJson___parent___internal___type = 'childAlbumsJson___parent___internal___type',
  childAlbumsJson___parent___parent___children = 'childAlbumsJson___parent___parent___children',
  childAlbumsJson___parent___parent___id = 'childAlbumsJson___parent___parent___id',
  childAlbumsJson___title = 'childAlbumsJson___title',
  childBackstageJson___children = 'childBackstageJson___children',
  childBackstageJson___children___children = 'childBackstageJson___children___children',
  childBackstageJson___children___children___children = 'childBackstageJson___children___children___children',
  childBackstageJson___children___children___id = 'childBackstageJson___children___children___id',
  childBackstageJson___children___id = 'childBackstageJson___children___id',
  childBackstageJson___children___internal___content = 'childBackstageJson___children___internal___content',
  childBackstageJson___children___internal___contentDigest = 'childBackstageJson___children___internal___contentDigest',
  childBackstageJson___children___internal___description = 'childBackstageJson___children___internal___description',
  childBackstageJson___children___internal___fieldOwners = 'childBackstageJson___children___internal___fieldOwners',
  childBackstageJson___children___internal___ignoreType = 'childBackstageJson___children___internal___ignoreType',
  childBackstageJson___children___internal___mediaType = 'childBackstageJson___children___internal___mediaType',
  childBackstageJson___children___internal___owner = 'childBackstageJson___children___internal___owner',
  childBackstageJson___children___internal___type = 'childBackstageJson___children___internal___type',
  childBackstageJson___children___parent___children = 'childBackstageJson___children___parent___children',
  childBackstageJson___children___parent___id = 'childBackstageJson___children___parent___id',
  childBackstageJson___id = 'childBackstageJson___id',
  childBackstageJson___internal___content = 'childBackstageJson___internal___content',
  childBackstageJson___internal___contentDigest = 'childBackstageJson___internal___contentDigest',
  childBackstageJson___internal___description = 'childBackstageJson___internal___description',
  childBackstageJson___internal___fieldOwners = 'childBackstageJson___internal___fieldOwners',
  childBackstageJson___internal___ignoreType = 'childBackstageJson___internal___ignoreType',
  childBackstageJson___internal___mediaType = 'childBackstageJson___internal___mediaType',
  childBackstageJson___internal___owner = 'childBackstageJson___internal___owner',
  childBackstageJson___internal___type = 'childBackstageJson___internal___type',
  childBackstageJson___parent___children = 'childBackstageJson___parent___children',
  childBackstageJson___parent___children___children = 'childBackstageJson___parent___children___children',
  childBackstageJson___parent___children___id = 'childBackstageJson___parent___children___id',
  childBackstageJson___parent___id = 'childBackstageJson___parent___id',
  childBackstageJson___parent___internal___content = 'childBackstageJson___parent___internal___content',
  childBackstageJson___parent___internal___contentDigest = 'childBackstageJson___parent___internal___contentDigest',
  childBackstageJson___parent___internal___description = 'childBackstageJson___parent___internal___description',
  childBackstageJson___parent___internal___fieldOwners = 'childBackstageJson___parent___internal___fieldOwners',
  childBackstageJson___parent___internal___ignoreType = 'childBackstageJson___parent___internal___ignoreType',
  childBackstageJson___parent___internal___mediaType = 'childBackstageJson___parent___internal___mediaType',
  childBackstageJson___parent___internal___owner = 'childBackstageJson___parent___internal___owner',
  childBackstageJson___parent___internal___type = 'childBackstageJson___parent___internal___type',
  childBackstageJson___parent___parent___children = 'childBackstageJson___parent___parent___children',
  childBackstageJson___parent___parent___id = 'childBackstageJson___parent___parent___id',
  childBackstageJson___title = 'childBackstageJson___title',
  childContactsJson___children = 'childContactsJson___children',
  childContactsJson___children___children = 'childContactsJson___children___children',
  childContactsJson___children___children___children = 'childContactsJson___children___children___children',
  childContactsJson___children___children___id = 'childContactsJson___children___children___id',
  childContactsJson___children___id = 'childContactsJson___children___id',
  childContactsJson___children___internal___content = 'childContactsJson___children___internal___content',
  childContactsJson___children___internal___contentDigest = 'childContactsJson___children___internal___contentDigest',
  childContactsJson___children___internal___description = 'childContactsJson___children___internal___description',
  childContactsJson___children___internal___fieldOwners = 'childContactsJson___children___internal___fieldOwners',
  childContactsJson___children___internal___ignoreType = 'childContactsJson___children___internal___ignoreType',
  childContactsJson___children___internal___mediaType = 'childContactsJson___children___internal___mediaType',
  childContactsJson___children___internal___owner = 'childContactsJson___children___internal___owner',
  childContactsJson___children___internal___type = 'childContactsJson___children___internal___type',
  childContactsJson___children___parent___children = 'childContactsJson___children___parent___children',
  childContactsJson___children___parent___id = 'childContactsJson___children___parent___id',
  childContactsJson___id = 'childContactsJson___id',
  childContactsJson___internal___content = 'childContactsJson___internal___content',
  childContactsJson___internal___contentDigest = 'childContactsJson___internal___contentDigest',
  childContactsJson___internal___description = 'childContactsJson___internal___description',
  childContactsJson___internal___fieldOwners = 'childContactsJson___internal___fieldOwners',
  childContactsJson___internal___ignoreType = 'childContactsJson___internal___ignoreType',
  childContactsJson___internal___mediaType = 'childContactsJson___internal___mediaType',
  childContactsJson___internal___owner = 'childContactsJson___internal___owner',
  childContactsJson___internal___type = 'childContactsJson___internal___type',
  childContactsJson___parent___children = 'childContactsJson___parent___children',
  childContactsJson___parent___children___children = 'childContactsJson___parent___children___children',
  childContactsJson___parent___children___id = 'childContactsJson___parent___children___id',
  childContactsJson___parent___id = 'childContactsJson___parent___id',
  childContactsJson___parent___internal___content = 'childContactsJson___parent___internal___content',
  childContactsJson___parent___internal___contentDigest = 'childContactsJson___parent___internal___contentDigest',
  childContactsJson___parent___internal___description = 'childContactsJson___parent___internal___description',
  childContactsJson___parent___internal___fieldOwners = 'childContactsJson___parent___internal___fieldOwners',
  childContactsJson___parent___internal___ignoreType = 'childContactsJson___parent___internal___ignoreType',
  childContactsJson___parent___internal___mediaType = 'childContactsJson___parent___internal___mediaType',
  childContactsJson___parent___internal___owner = 'childContactsJson___parent___internal___owner',
  childContactsJson___parent___internal___type = 'childContactsJson___parent___internal___type',
  childContactsJson___parent___parent___children = 'childContactsJson___parent___parent___children',
  childContactsJson___parent___parent___id = 'childContactsJson___parent___parent___id',
  childContactsJson___title = 'childContactsJson___title',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childPicsJson___children = 'childPicsJson___children',
  childPicsJson___children___children = 'childPicsJson___children___children',
  childPicsJson___children___children___children = 'childPicsJson___children___children___children',
  childPicsJson___children___children___id = 'childPicsJson___children___children___id',
  childPicsJson___children___id = 'childPicsJson___children___id',
  childPicsJson___children___internal___content = 'childPicsJson___children___internal___content',
  childPicsJson___children___internal___contentDigest = 'childPicsJson___children___internal___contentDigest',
  childPicsJson___children___internal___description = 'childPicsJson___children___internal___description',
  childPicsJson___children___internal___fieldOwners = 'childPicsJson___children___internal___fieldOwners',
  childPicsJson___children___internal___ignoreType = 'childPicsJson___children___internal___ignoreType',
  childPicsJson___children___internal___mediaType = 'childPicsJson___children___internal___mediaType',
  childPicsJson___children___internal___owner = 'childPicsJson___children___internal___owner',
  childPicsJson___children___internal___type = 'childPicsJson___children___internal___type',
  childPicsJson___children___parent___children = 'childPicsJson___children___parent___children',
  childPicsJson___children___parent___id = 'childPicsJson___children___parent___id',
  childPicsJson___id = 'childPicsJson___id',
  childPicsJson___internal___content = 'childPicsJson___internal___content',
  childPicsJson___internal___contentDigest = 'childPicsJson___internal___contentDigest',
  childPicsJson___internal___description = 'childPicsJson___internal___description',
  childPicsJson___internal___fieldOwners = 'childPicsJson___internal___fieldOwners',
  childPicsJson___internal___ignoreType = 'childPicsJson___internal___ignoreType',
  childPicsJson___internal___mediaType = 'childPicsJson___internal___mediaType',
  childPicsJson___internal___owner = 'childPicsJson___internal___owner',
  childPicsJson___internal___type = 'childPicsJson___internal___type',
  childPicsJson___parent___children = 'childPicsJson___parent___children',
  childPicsJson___parent___children___children = 'childPicsJson___parent___children___children',
  childPicsJson___parent___children___id = 'childPicsJson___parent___children___id',
  childPicsJson___parent___id = 'childPicsJson___parent___id',
  childPicsJson___parent___internal___content = 'childPicsJson___parent___internal___content',
  childPicsJson___parent___internal___contentDigest = 'childPicsJson___parent___internal___contentDigest',
  childPicsJson___parent___internal___description = 'childPicsJson___parent___internal___description',
  childPicsJson___parent___internal___fieldOwners = 'childPicsJson___parent___internal___fieldOwners',
  childPicsJson___parent___internal___ignoreType = 'childPicsJson___parent___internal___ignoreType',
  childPicsJson___parent___internal___mediaType = 'childPicsJson___parent___internal___mediaType',
  childPicsJson___parent___internal___owner = 'childPicsJson___parent___internal___owner',
  childPicsJson___parent___internal___type = 'childPicsJson___parent___internal___type',
  childPicsJson___parent___parent___children = 'childPicsJson___parent___parent___children',
  childPicsJson___parent___parent___id = 'childPicsJson___parent___parent___id',
  childPicsJson___pictures = 'childPicsJson___pictures',
  childPicsJson___pictures___background = 'childPicsJson___pictures___background',
  childPicsJson___pictures___children = 'childPicsJson___pictures___children',
  childPicsJson___pictures___children___children = 'childPicsJson___pictures___children___children',
  childPicsJson___pictures___children___id = 'childPicsJson___pictures___children___id',
  childPicsJson___pictures___description = 'childPicsJson___pictures___description',
  childPicsJson___pictures___fields___slug = 'childPicsJson___pictures___fields___slug',
  childPicsJson___pictures___id = 'childPicsJson___pictures___id',
  childPicsJson___pictures___image___absolutePath = 'childPicsJson___pictures___image___absolutePath',
  childPicsJson___pictures___image___accessTime = 'childPicsJson___pictures___image___accessTime',
  childPicsJson___pictures___image___atime = 'childPicsJson___pictures___image___atime',
  childPicsJson___pictures___image___atimeMs = 'childPicsJson___pictures___image___atimeMs',
  childPicsJson___pictures___image___base = 'childPicsJson___pictures___image___base',
  childPicsJson___pictures___image___birthTime = 'childPicsJson___pictures___image___birthTime',
  childPicsJson___pictures___image___birthtime = 'childPicsJson___pictures___image___birthtime',
  childPicsJson___pictures___image___birthtimeMs = 'childPicsJson___pictures___image___birthtimeMs',
  childPicsJson___pictures___image___blksize = 'childPicsJson___pictures___image___blksize',
  childPicsJson___pictures___image___blocks = 'childPicsJson___pictures___image___blocks',
  childPicsJson___pictures___image___changeTime = 'childPicsJson___pictures___image___changeTime',
  childPicsJson___pictures___image___children = 'childPicsJson___pictures___image___children',
  childPicsJson___pictures___image___childrenAboutJson = 'childPicsJson___pictures___image___childrenAboutJson',
  childPicsJson___pictures___image___childrenAlbumsJson = 'childPicsJson___pictures___image___childrenAlbumsJson',
  childPicsJson___pictures___image___childrenBackstageJson = 'childPicsJson___pictures___image___childrenBackstageJson',
  childPicsJson___pictures___image___childrenContactsJson = 'childPicsJson___pictures___image___childrenContactsJson',
  childPicsJson___pictures___image___childrenImageSharp = 'childPicsJson___pictures___image___childrenImageSharp',
  childPicsJson___pictures___image___childrenPicsJson = 'childPicsJson___pictures___image___childrenPicsJson',
  childPicsJson___pictures___image___childrenPicturesJson = 'childPicsJson___pictures___image___childrenPicturesJson',
  childPicsJson___pictures___image___childrenSeriesJson = 'childPicsJson___pictures___image___childrenSeriesJson',
  childPicsJson___pictures___image___ctime = 'childPicsJson___pictures___image___ctime',
  childPicsJson___pictures___image___ctimeMs = 'childPicsJson___pictures___image___ctimeMs',
  childPicsJson___pictures___image___dev = 'childPicsJson___pictures___image___dev',
  childPicsJson___pictures___image___dir = 'childPicsJson___pictures___image___dir',
  childPicsJson___pictures___image___ext = 'childPicsJson___pictures___image___ext',
  childPicsJson___pictures___image___extension = 'childPicsJson___pictures___image___extension',
  childPicsJson___pictures___image___gid = 'childPicsJson___pictures___image___gid',
  childPicsJson___pictures___image___id = 'childPicsJson___pictures___image___id',
  childPicsJson___pictures___image___ino = 'childPicsJson___pictures___image___ino',
  childPicsJson___pictures___image___mode = 'childPicsJson___pictures___image___mode',
  childPicsJson___pictures___image___modifiedTime = 'childPicsJson___pictures___image___modifiedTime',
  childPicsJson___pictures___image___mtime = 'childPicsJson___pictures___image___mtime',
  childPicsJson___pictures___image___mtimeMs = 'childPicsJson___pictures___image___mtimeMs',
  childPicsJson___pictures___image___name = 'childPicsJson___pictures___image___name',
  childPicsJson___pictures___image___nlink = 'childPicsJson___pictures___image___nlink',
  childPicsJson___pictures___image___prettySize = 'childPicsJson___pictures___image___prettySize',
  childPicsJson___pictures___image___publicURL = 'childPicsJson___pictures___image___publicURL',
  childPicsJson___pictures___image___rdev = 'childPicsJson___pictures___image___rdev',
  childPicsJson___pictures___image___relativeDirectory = 'childPicsJson___pictures___image___relativeDirectory',
  childPicsJson___pictures___image___relativePath = 'childPicsJson___pictures___image___relativePath',
  childPicsJson___pictures___image___root = 'childPicsJson___pictures___image___root',
  childPicsJson___pictures___image___size = 'childPicsJson___pictures___image___size',
  childPicsJson___pictures___image___sourceInstanceName = 'childPicsJson___pictures___image___sourceInstanceName',
  childPicsJson___pictures___image___uid = 'childPicsJson___pictures___image___uid',
  childPicsJson___pictures___internal___content = 'childPicsJson___pictures___internal___content',
  childPicsJson___pictures___internal___contentDigest = 'childPicsJson___pictures___internal___contentDigest',
  childPicsJson___pictures___internal___description = 'childPicsJson___pictures___internal___description',
  childPicsJson___pictures___internal___fieldOwners = 'childPicsJson___pictures___internal___fieldOwners',
  childPicsJson___pictures___internal___ignoreType = 'childPicsJson___pictures___internal___ignoreType',
  childPicsJson___pictures___internal___mediaType = 'childPicsJson___pictures___internal___mediaType',
  childPicsJson___pictures___internal___owner = 'childPicsJson___pictures___internal___owner',
  childPicsJson___pictures___internal___type = 'childPicsJson___pictures___internal___type',
  childPicsJson___pictures___parent___children = 'childPicsJson___pictures___parent___children',
  childPicsJson___pictures___parent___id = 'childPicsJson___pictures___parent___id',
  childPicsJson___pictures___title = 'childPicsJson___pictures___title',
  childPicsJson___title = 'childPicsJson___title',
  childPicturesJson___background = 'childPicturesJson___background',
  childPicturesJson___children = 'childPicturesJson___children',
  childPicturesJson___children___children = 'childPicturesJson___children___children',
  childPicturesJson___children___children___children = 'childPicturesJson___children___children___children',
  childPicturesJson___children___children___id = 'childPicturesJson___children___children___id',
  childPicturesJson___children___id = 'childPicturesJson___children___id',
  childPicturesJson___children___internal___content = 'childPicturesJson___children___internal___content',
  childPicturesJson___children___internal___contentDigest = 'childPicturesJson___children___internal___contentDigest',
  childPicturesJson___children___internal___description = 'childPicturesJson___children___internal___description',
  childPicturesJson___children___internal___fieldOwners = 'childPicturesJson___children___internal___fieldOwners',
  childPicturesJson___children___internal___ignoreType = 'childPicturesJson___children___internal___ignoreType',
  childPicturesJson___children___internal___mediaType = 'childPicturesJson___children___internal___mediaType',
  childPicturesJson___children___internal___owner = 'childPicturesJson___children___internal___owner',
  childPicturesJson___children___internal___type = 'childPicturesJson___children___internal___type',
  childPicturesJson___children___parent___children = 'childPicturesJson___children___parent___children',
  childPicturesJson___children___parent___id = 'childPicturesJson___children___parent___id',
  childPicturesJson___description = 'childPicturesJson___description',
  childPicturesJson___fields___slug = 'childPicturesJson___fields___slug',
  childPicturesJson___id = 'childPicturesJson___id',
  childPicturesJson___image___absolutePath = 'childPicturesJson___image___absolutePath',
  childPicturesJson___image___accessTime = 'childPicturesJson___image___accessTime',
  childPicturesJson___image___atime = 'childPicturesJson___image___atime',
  childPicturesJson___image___atimeMs = 'childPicturesJson___image___atimeMs',
  childPicturesJson___image___base = 'childPicturesJson___image___base',
  childPicturesJson___image___birthTime = 'childPicturesJson___image___birthTime',
  childPicturesJson___image___birthtime = 'childPicturesJson___image___birthtime',
  childPicturesJson___image___birthtimeMs = 'childPicturesJson___image___birthtimeMs',
  childPicturesJson___image___blksize = 'childPicturesJson___image___blksize',
  childPicturesJson___image___blocks = 'childPicturesJson___image___blocks',
  childPicturesJson___image___changeTime = 'childPicturesJson___image___changeTime',
  childPicturesJson___image___childAboutJson___children = 'childPicturesJson___image___childAboutJson___children',
  childPicturesJson___image___childAboutJson___id = 'childPicturesJson___image___childAboutJson___id',
  childPicturesJson___image___childAboutJson___title = 'childPicturesJson___image___childAboutJson___title',
  childPicturesJson___image___childAlbumsJson___background = 'childPicturesJson___image___childAlbumsJson___background',
  childPicturesJson___image___childAlbumsJson___children = 'childPicturesJson___image___childAlbumsJson___children',
  childPicturesJson___image___childAlbumsJson___description = 'childPicturesJson___image___childAlbumsJson___description',
  childPicturesJson___image___childAlbumsJson___gatsbyPath = 'childPicturesJson___image___childAlbumsJson___gatsbyPath',
  childPicturesJson___image___childAlbumsJson___id = 'childPicturesJson___image___childAlbumsJson___id',
  childPicturesJson___image___childAlbumsJson___images = 'childPicturesJson___image___childAlbumsJson___images',
  childPicturesJson___image___childAlbumsJson___title = 'childPicturesJson___image___childAlbumsJson___title',
  childPicturesJson___image___childBackstageJson___children = 'childPicturesJson___image___childBackstageJson___children',
  childPicturesJson___image___childBackstageJson___id = 'childPicturesJson___image___childBackstageJson___id',
  childPicturesJson___image___childBackstageJson___title = 'childPicturesJson___image___childBackstageJson___title',
  childPicturesJson___image___childContactsJson___children = 'childPicturesJson___image___childContactsJson___children',
  childPicturesJson___image___childContactsJson___id = 'childPicturesJson___image___childContactsJson___id',
  childPicturesJson___image___childContactsJson___title = 'childPicturesJson___image___childContactsJson___title',
  childPicturesJson___image___childImageSharp___children = 'childPicturesJson___image___childImageSharp___children',
  childPicturesJson___image___childImageSharp___gatsbyImageData = 'childPicturesJson___image___childImageSharp___gatsbyImageData',
  childPicturesJson___image___childImageSharp___id = 'childPicturesJson___image___childImageSharp___id',
  childPicturesJson___image___childPicsJson___children = 'childPicturesJson___image___childPicsJson___children',
  childPicturesJson___image___childPicsJson___id = 'childPicturesJson___image___childPicsJson___id',
  childPicturesJson___image___childPicsJson___pictures = 'childPicturesJson___image___childPicsJson___pictures',
  childPicturesJson___image___childPicsJson___title = 'childPicturesJson___image___childPicsJson___title',
  childPicturesJson___image___childPicturesJson___background = 'childPicturesJson___image___childPicturesJson___background',
  childPicturesJson___image___childPicturesJson___children = 'childPicturesJson___image___childPicturesJson___children',
  childPicturesJson___image___childPicturesJson___description = 'childPicturesJson___image___childPicturesJson___description',
  childPicturesJson___image___childPicturesJson___id = 'childPicturesJson___image___childPicturesJson___id',
  childPicturesJson___image___childPicturesJson___title = 'childPicturesJson___image___childPicturesJson___title',
  childPicturesJson___image___childSeriesJson___albums = 'childPicturesJson___image___childSeriesJson___albums',
  childPicturesJson___image___childSeriesJson___children = 'childPicturesJson___image___childSeriesJson___children',
  childPicturesJson___image___childSeriesJson___id = 'childPicturesJson___image___childSeriesJson___id',
  childPicturesJson___image___childSeriesJson___title = 'childPicturesJson___image___childSeriesJson___title',
  childPicturesJson___image___children = 'childPicturesJson___image___children',
  childPicturesJson___image___childrenAboutJson = 'childPicturesJson___image___childrenAboutJson',
  childPicturesJson___image___childrenAboutJson___children = 'childPicturesJson___image___childrenAboutJson___children',
  childPicturesJson___image___childrenAboutJson___id = 'childPicturesJson___image___childrenAboutJson___id',
  childPicturesJson___image___childrenAboutJson___title = 'childPicturesJson___image___childrenAboutJson___title',
  childPicturesJson___image___childrenAlbumsJson = 'childPicturesJson___image___childrenAlbumsJson',
  childPicturesJson___image___childrenAlbumsJson___background = 'childPicturesJson___image___childrenAlbumsJson___background',
  childPicturesJson___image___childrenAlbumsJson___children = 'childPicturesJson___image___childrenAlbumsJson___children',
  childPicturesJson___image___childrenAlbumsJson___description = 'childPicturesJson___image___childrenAlbumsJson___description',
  childPicturesJson___image___childrenAlbumsJson___gatsbyPath = 'childPicturesJson___image___childrenAlbumsJson___gatsbyPath',
  childPicturesJson___image___childrenAlbumsJson___id = 'childPicturesJson___image___childrenAlbumsJson___id',
  childPicturesJson___image___childrenAlbumsJson___images = 'childPicturesJson___image___childrenAlbumsJson___images',
  childPicturesJson___image___childrenAlbumsJson___title = 'childPicturesJson___image___childrenAlbumsJson___title',
  childPicturesJson___image___childrenBackstageJson = 'childPicturesJson___image___childrenBackstageJson',
  childPicturesJson___image___childrenBackstageJson___children = 'childPicturesJson___image___childrenBackstageJson___children',
  childPicturesJson___image___childrenBackstageJson___id = 'childPicturesJson___image___childrenBackstageJson___id',
  childPicturesJson___image___childrenBackstageJson___title = 'childPicturesJson___image___childrenBackstageJson___title',
  childPicturesJson___image___childrenContactsJson = 'childPicturesJson___image___childrenContactsJson',
  childPicturesJson___image___childrenContactsJson___children = 'childPicturesJson___image___childrenContactsJson___children',
  childPicturesJson___image___childrenContactsJson___id = 'childPicturesJson___image___childrenContactsJson___id',
  childPicturesJson___image___childrenContactsJson___title = 'childPicturesJson___image___childrenContactsJson___title',
  childPicturesJson___image___childrenImageSharp = 'childPicturesJson___image___childrenImageSharp',
  childPicturesJson___image___childrenImageSharp___children = 'childPicturesJson___image___childrenImageSharp___children',
  childPicturesJson___image___childrenImageSharp___gatsbyImageData = 'childPicturesJson___image___childrenImageSharp___gatsbyImageData',
  childPicturesJson___image___childrenImageSharp___id = 'childPicturesJson___image___childrenImageSharp___id',
  childPicturesJson___image___childrenPicsJson = 'childPicturesJson___image___childrenPicsJson',
  childPicturesJson___image___childrenPicsJson___children = 'childPicturesJson___image___childrenPicsJson___children',
  childPicturesJson___image___childrenPicsJson___id = 'childPicturesJson___image___childrenPicsJson___id',
  childPicturesJson___image___childrenPicsJson___pictures = 'childPicturesJson___image___childrenPicsJson___pictures',
  childPicturesJson___image___childrenPicsJson___title = 'childPicturesJson___image___childrenPicsJson___title',
  childPicturesJson___image___childrenPicturesJson = 'childPicturesJson___image___childrenPicturesJson',
  childPicturesJson___image___childrenPicturesJson___background = 'childPicturesJson___image___childrenPicturesJson___background',
  childPicturesJson___image___childrenPicturesJson___children = 'childPicturesJson___image___childrenPicturesJson___children',
  childPicturesJson___image___childrenPicturesJson___description = 'childPicturesJson___image___childrenPicturesJson___description',
  childPicturesJson___image___childrenPicturesJson___id = 'childPicturesJson___image___childrenPicturesJson___id',
  childPicturesJson___image___childrenPicturesJson___title = 'childPicturesJson___image___childrenPicturesJson___title',
  childPicturesJson___image___childrenSeriesJson = 'childPicturesJson___image___childrenSeriesJson',
  childPicturesJson___image___childrenSeriesJson___albums = 'childPicturesJson___image___childrenSeriesJson___albums',
  childPicturesJson___image___childrenSeriesJson___children = 'childPicturesJson___image___childrenSeriesJson___children',
  childPicturesJson___image___childrenSeriesJson___id = 'childPicturesJson___image___childrenSeriesJson___id',
  childPicturesJson___image___childrenSeriesJson___title = 'childPicturesJson___image___childrenSeriesJson___title',
  childPicturesJson___image___children___children = 'childPicturesJson___image___children___children',
  childPicturesJson___image___children___id = 'childPicturesJson___image___children___id',
  childPicturesJson___image___ctime = 'childPicturesJson___image___ctime',
  childPicturesJson___image___ctimeMs = 'childPicturesJson___image___ctimeMs',
  childPicturesJson___image___dev = 'childPicturesJson___image___dev',
  childPicturesJson___image___dir = 'childPicturesJson___image___dir',
  childPicturesJson___image___ext = 'childPicturesJson___image___ext',
  childPicturesJson___image___extension = 'childPicturesJson___image___extension',
  childPicturesJson___image___gid = 'childPicturesJson___image___gid',
  childPicturesJson___image___id = 'childPicturesJson___image___id',
  childPicturesJson___image___ino = 'childPicturesJson___image___ino',
  childPicturesJson___image___internal___content = 'childPicturesJson___image___internal___content',
  childPicturesJson___image___internal___contentDigest = 'childPicturesJson___image___internal___contentDigest',
  childPicturesJson___image___internal___description = 'childPicturesJson___image___internal___description',
  childPicturesJson___image___internal___fieldOwners = 'childPicturesJson___image___internal___fieldOwners',
  childPicturesJson___image___internal___ignoreType = 'childPicturesJson___image___internal___ignoreType',
  childPicturesJson___image___internal___mediaType = 'childPicturesJson___image___internal___mediaType',
  childPicturesJson___image___internal___owner = 'childPicturesJson___image___internal___owner',
  childPicturesJson___image___internal___type = 'childPicturesJson___image___internal___type',
  childPicturesJson___image___mode = 'childPicturesJson___image___mode',
  childPicturesJson___image___modifiedTime = 'childPicturesJson___image___modifiedTime',
  childPicturesJson___image___mtime = 'childPicturesJson___image___mtime',
  childPicturesJson___image___mtimeMs = 'childPicturesJson___image___mtimeMs',
  childPicturesJson___image___name = 'childPicturesJson___image___name',
  childPicturesJson___image___nlink = 'childPicturesJson___image___nlink',
  childPicturesJson___image___parent___children = 'childPicturesJson___image___parent___children',
  childPicturesJson___image___parent___id = 'childPicturesJson___image___parent___id',
  childPicturesJson___image___prettySize = 'childPicturesJson___image___prettySize',
  childPicturesJson___image___publicURL = 'childPicturesJson___image___publicURL',
  childPicturesJson___image___rdev = 'childPicturesJson___image___rdev',
  childPicturesJson___image___relativeDirectory = 'childPicturesJson___image___relativeDirectory',
  childPicturesJson___image___relativePath = 'childPicturesJson___image___relativePath',
  childPicturesJson___image___root = 'childPicturesJson___image___root',
  childPicturesJson___image___size = 'childPicturesJson___image___size',
  childPicturesJson___image___sourceInstanceName = 'childPicturesJson___image___sourceInstanceName',
  childPicturesJson___image___uid = 'childPicturesJson___image___uid',
  childPicturesJson___internal___content = 'childPicturesJson___internal___content',
  childPicturesJson___internal___contentDigest = 'childPicturesJson___internal___contentDigest',
  childPicturesJson___internal___description = 'childPicturesJson___internal___description',
  childPicturesJson___internal___fieldOwners = 'childPicturesJson___internal___fieldOwners',
  childPicturesJson___internal___ignoreType = 'childPicturesJson___internal___ignoreType',
  childPicturesJson___internal___mediaType = 'childPicturesJson___internal___mediaType',
  childPicturesJson___internal___owner = 'childPicturesJson___internal___owner',
  childPicturesJson___internal___type = 'childPicturesJson___internal___type',
  childPicturesJson___parent___children = 'childPicturesJson___parent___children',
  childPicturesJson___parent___children___children = 'childPicturesJson___parent___children___children',
  childPicturesJson___parent___children___id = 'childPicturesJson___parent___children___id',
  childPicturesJson___parent___id = 'childPicturesJson___parent___id',
  childPicturesJson___parent___internal___content = 'childPicturesJson___parent___internal___content',
  childPicturesJson___parent___internal___contentDigest = 'childPicturesJson___parent___internal___contentDigest',
  childPicturesJson___parent___internal___description = 'childPicturesJson___parent___internal___description',
  childPicturesJson___parent___internal___fieldOwners = 'childPicturesJson___parent___internal___fieldOwners',
  childPicturesJson___parent___internal___ignoreType = 'childPicturesJson___parent___internal___ignoreType',
  childPicturesJson___parent___internal___mediaType = 'childPicturesJson___parent___internal___mediaType',
  childPicturesJson___parent___internal___owner = 'childPicturesJson___parent___internal___owner',
  childPicturesJson___parent___internal___type = 'childPicturesJson___parent___internal___type',
  childPicturesJson___parent___parent___children = 'childPicturesJson___parent___parent___children',
  childPicturesJson___parent___parent___id = 'childPicturesJson___parent___parent___id',
  childPicturesJson___title = 'childPicturesJson___title',
  childSeriesJson___albums = 'childSeriesJson___albums',
  childSeriesJson___albums___background = 'childSeriesJson___albums___background',
  childSeriesJson___albums___children = 'childSeriesJson___albums___children',
  childSeriesJson___albums___children___children = 'childSeriesJson___albums___children___children',
  childSeriesJson___albums___children___id = 'childSeriesJson___albums___children___id',
  childSeriesJson___albums___description = 'childSeriesJson___albums___description',
  childSeriesJson___albums___fields___slug = 'childSeriesJson___albums___fields___slug',
  childSeriesJson___albums___gatsbyPath = 'childSeriesJson___albums___gatsbyPath',
  childSeriesJson___albums___id = 'childSeriesJson___albums___id',
  childSeriesJson___albums___images = 'childSeriesJson___albums___images',
  childSeriesJson___albums___images___cover = 'childSeriesJson___albums___images___cover',
  childSeriesJson___albums___internal___content = 'childSeriesJson___albums___internal___content',
  childSeriesJson___albums___internal___contentDigest = 'childSeriesJson___albums___internal___contentDigest',
  childSeriesJson___albums___internal___description = 'childSeriesJson___albums___internal___description',
  childSeriesJson___albums___internal___fieldOwners = 'childSeriesJson___albums___internal___fieldOwners',
  childSeriesJson___albums___internal___ignoreType = 'childSeriesJson___albums___internal___ignoreType',
  childSeriesJson___albums___internal___mediaType = 'childSeriesJson___albums___internal___mediaType',
  childSeriesJson___albums___internal___owner = 'childSeriesJson___albums___internal___owner',
  childSeriesJson___albums___internal___type = 'childSeriesJson___albums___internal___type',
  childSeriesJson___albums___parent___children = 'childSeriesJson___albums___parent___children',
  childSeriesJson___albums___parent___id = 'childSeriesJson___albums___parent___id',
  childSeriesJson___albums___title = 'childSeriesJson___albums___title',
  childSeriesJson___children = 'childSeriesJson___children',
  childSeriesJson___children___children = 'childSeriesJson___children___children',
  childSeriesJson___children___children___children = 'childSeriesJson___children___children___children',
  childSeriesJson___children___children___id = 'childSeriesJson___children___children___id',
  childSeriesJson___children___id = 'childSeriesJson___children___id',
  childSeriesJson___children___internal___content = 'childSeriesJson___children___internal___content',
  childSeriesJson___children___internal___contentDigest = 'childSeriesJson___children___internal___contentDigest',
  childSeriesJson___children___internal___description = 'childSeriesJson___children___internal___description',
  childSeriesJson___children___internal___fieldOwners = 'childSeriesJson___children___internal___fieldOwners',
  childSeriesJson___children___internal___ignoreType = 'childSeriesJson___children___internal___ignoreType',
  childSeriesJson___children___internal___mediaType = 'childSeriesJson___children___internal___mediaType',
  childSeriesJson___children___internal___owner = 'childSeriesJson___children___internal___owner',
  childSeriesJson___children___internal___type = 'childSeriesJson___children___internal___type',
  childSeriesJson___children___parent___children = 'childSeriesJson___children___parent___children',
  childSeriesJson___children___parent___id = 'childSeriesJson___children___parent___id',
  childSeriesJson___id = 'childSeriesJson___id',
  childSeriesJson___internal___content = 'childSeriesJson___internal___content',
  childSeriesJson___internal___contentDigest = 'childSeriesJson___internal___contentDigest',
  childSeriesJson___internal___description = 'childSeriesJson___internal___description',
  childSeriesJson___internal___fieldOwners = 'childSeriesJson___internal___fieldOwners',
  childSeriesJson___internal___ignoreType = 'childSeriesJson___internal___ignoreType',
  childSeriesJson___internal___mediaType = 'childSeriesJson___internal___mediaType',
  childSeriesJson___internal___owner = 'childSeriesJson___internal___owner',
  childSeriesJson___internal___type = 'childSeriesJson___internal___type',
  childSeriesJson___parent___children = 'childSeriesJson___parent___children',
  childSeriesJson___parent___children___children = 'childSeriesJson___parent___children___children',
  childSeriesJson___parent___children___id = 'childSeriesJson___parent___children___id',
  childSeriesJson___parent___id = 'childSeriesJson___parent___id',
  childSeriesJson___parent___internal___content = 'childSeriesJson___parent___internal___content',
  childSeriesJson___parent___internal___contentDigest = 'childSeriesJson___parent___internal___contentDigest',
  childSeriesJson___parent___internal___description = 'childSeriesJson___parent___internal___description',
  childSeriesJson___parent___internal___fieldOwners = 'childSeriesJson___parent___internal___fieldOwners',
  childSeriesJson___parent___internal___ignoreType = 'childSeriesJson___parent___internal___ignoreType',
  childSeriesJson___parent___internal___mediaType = 'childSeriesJson___parent___internal___mediaType',
  childSeriesJson___parent___internal___owner = 'childSeriesJson___parent___internal___owner',
  childSeriesJson___parent___internal___type = 'childSeriesJson___parent___internal___type',
  childSeriesJson___parent___parent___children = 'childSeriesJson___parent___parent___children',
  childSeriesJson___parent___parent___id = 'childSeriesJson___parent___parent___id',
  childSeriesJson___title = 'childSeriesJson___title',
  children = 'children',
  childrenAboutJson = 'childrenAboutJson',
  childrenAboutJson___children = 'childrenAboutJson___children',
  childrenAboutJson___children___children = 'childrenAboutJson___children___children',
  childrenAboutJson___children___children___children = 'childrenAboutJson___children___children___children',
  childrenAboutJson___children___children___id = 'childrenAboutJson___children___children___id',
  childrenAboutJson___children___id = 'childrenAboutJson___children___id',
  childrenAboutJson___children___internal___content = 'childrenAboutJson___children___internal___content',
  childrenAboutJson___children___internal___contentDigest = 'childrenAboutJson___children___internal___contentDigest',
  childrenAboutJson___children___internal___description = 'childrenAboutJson___children___internal___description',
  childrenAboutJson___children___internal___fieldOwners = 'childrenAboutJson___children___internal___fieldOwners',
  childrenAboutJson___children___internal___ignoreType = 'childrenAboutJson___children___internal___ignoreType',
  childrenAboutJson___children___internal___mediaType = 'childrenAboutJson___children___internal___mediaType',
  childrenAboutJson___children___internal___owner = 'childrenAboutJson___children___internal___owner',
  childrenAboutJson___children___internal___type = 'childrenAboutJson___children___internal___type',
  childrenAboutJson___children___parent___children = 'childrenAboutJson___children___parent___children',
  childrenAboutJson___children___parent___id = 'childrenAboutJson___children___parent___id',
  childrenAboutJson___id = 'childrenAboutJson___id',
  childrenAboutJson___internal___content = 'childrenAboutJson___internal___content',
  childrenAboutJson___internal___contentDigest = 'childrenAboutJson___internal___contentDigest',
  childrenAboutJson___internal___description = 'childrenAboutJson___internal___description',
  childrenAboutJson___internal___fieldOwners = 'childrenAboutJson___internal___fieldOwners',
  childrenAboutJson___internal___ignoreType = 'childrenAboutJson___internal___ignoreType',
  childrenAboutJson___internal___mediaType = 'childrenAboutJson___internal___mediaType',
  childrenAboutJson___internal___owner = 'childrenAboutJson___internal___owner',
  childrenAboutJson___internal___type = 'childrenAboutJson___internal___type',
  childrenAboutJson___parent___children = 'childrenAboutJson___parent___children',
  childrenAboutJson___parent___children___children = 'childrenAboutJson___parent___children___children',
  childrenAboutJson___parent___children___id = 'childrenAboutJson___parent___children___id',
  childrenAboutJson___parent___id = 'childrenAboutJson___parent___id',
  childrenAboutJson___parent___internal___content = 'childrenAboutJson___parent___internal___content',
  childrenAboutJson___parent___internal___contentDigest = 'childrenAboutJson___parent___internal___contentDigest',
  childrenAboutJson___parent___internal___description = 'childrenAboutJson___parent___internal___description',
  childrenAboutJson___parent___internal___fieldOwners = 'childrenAboutJson___parent___internal___fieldOwners',
  childrenAboutJson___parent___internal___ignoreType = 'childrenAboutJson___parent___internal___ignoreType',
  childrenAboutJson___parent___internal___mediaType = 'childrenAboutJson___parent___internal___mediaType',
  childrenAboutJson___parent___internal___owner = 'childrenAboutJson___parent___internal___owner',
  childrenAboutJson___parent___internal___type = 'childrenAboutJson___parent___internal___type',
  childrenAboutJson___parent___parent___children = 'childrenAboutJson___parent___parent___children',
  childrenAboutJson___parent___parent___id = 'childrenAboutJson___parent___parent___id',
  childrenAboutJson___title = 'childrenAboutJson___title',
  childrenAlbumsJson = 'childrenAlbumsJson',
  childrenAlbumsJson___background = 'childrenAlbumsJson___background',
  childrenAlbumsJson___children = 'childrenAlbumsJson___children',
  childrenAlbumsJson___children___children = 'childrenAlbumsJson___children___children',
  childrenAlbumsJson___children___children___children = 'childrenAlbumsJson___children___children___children',
  childrenAlbumsJson___children___children___id = 'childrenAlbumsJson___children___children___id',
  childrenAlbumsJson___children___id = 'childrenAlbumsJson___children___id',
  childrenAlbumsJson___children___internal___content = 'childrenAlbumsJson___children___internal___content',
  childrenAlbumsJson___children___internal___contentDigest = 'childrenAlbumsJson___children___internal___contentDigest',
  childrenAlbumsJson___children___internal___description = 'childrenAlbumsJson___children___internal___description',
  childrenAlbumsJson___children___internal___fieldOwners = 'childrenAlbumsJson___children___internal___fieldOwners',
  childrenAlbumsJson___children___internal___ignoreType = 'childrenAlbumsJson___children___internal___ignoreType',
  childrenAlbumsJson___children___internal___mediaType = 'childrenAlbumsJson___children___internal___mediaType',
  childrenAlbumsJson___children___internal___owner = 'childrenAlbumsJson___children___internal___owner',
  childrenAlbumsJson___children___internal___type = 'childrenAlbumsJson___children___internal___type',
  childrenAlbumsJson___children___parent___children = 'childrenAlbumsJson___children___parent___children',
  childrenAlbumsJson___children___parent___id = 'childrenAlbumsJson___children___parent___id',
  childrenAlbumsJson___description = 'childrenAlbumsJson___description',
  childrenAlbumsJson___fields___slug = 'childrenAlbumsJson___fields___slug',
  childrenAlbumsJson___gatsbyPath = 'childrenAlbumsJson___gatsbyPath',
  childrenAlbumsJson___id = 'childrenAlbumsJson___id',
  childrenAlbumsJson___images = 'childrenAlbumsJson___images',
  childrenAlbumsJson___images___cover = 'childrenAlbumsJson___images___cover',
  childrenAlbumsJson___images___url___absolutePath = 'childrenAlbumsJson___images___url___absolutePath',
  childrenAlbumsJson___images___url___accessTime = 'childrenAlbumsJson___images___url___accessTime',
  childrenAlbumsJson___images___url___atime = 'childrenAlbumsJson___images___url___atime',
  childrenAlbumsJson___images___url___atimeMs = 'childrenAlbumsJson___images___url___atimeMs',
  childrenAlbumsJson___images___url___base = 'childrenAlbumsJson___images___url___base',
  childrenAlbumsJson___images___url___birthTime = 'childrenAlbumsJson___images___url___birthTime',
  childrenAlbumsJson___images___url___birthtime = 'childrenAlbumsJson___images___url___birthtime',
  childrenAlbumsJson___images___url___birthtimeMs = 'childrenAlbumsJson___images___url___birthtimeMs',
  childrenAlbumsJson___images___url___blksize = 'childrenAlbumsJson___images___url___blksize',
  childrenAlbumsJson___images___url___blocks = 'childrenAlbumsJson___images___url___blocks',
  childrenAlbumsJson___images___url___changeTime = 'childrenAlbumsJson___images___url___changeTime',
  childrenAlbumsJson___images___url___children = 'childrenAlbumsJson___images___url___children',
  childrenAlbumsJson___images___url___childrenAboutJson = 'childrenAlbumsJson___images___url___childrenAboutJson',
  childrenAlbumsJson___images___url___childrenAlbumsJson = 'childrenAlbumsJson___images___url___childrenAlbumsJson',
  childrenAlbumsJson___images___url___childrenBackstageJson = 'childrenAlbumsJson___images___url___childrenBackstageJson',
  childrenAlbumsJson___images___url___childrenContactsJson = 'childrenAlbumsJson___images___url___childrenContactsJson',
  childrenAlbumsJson___images___url___childrenImageSharp = 'childrenAlbumsJson___images___url___childrenImageSharp',
  childrenAlbumsJson___images___url___childrenPicsJson = 'childrenAlbumsJson___images___url___childrenPicsJson',
  childrenAlbumsJson___images___url___childrenPicturesJson = 'childrenAlbumsJson___images___url___childrenPicturesJson',
  childrenAlbumsJson___images___url___childrenSeriesJson = 'childrenAlbumsJson___images___url___childrenSeriesJson',
  childrenAlbumsJson___images___url___ctime = 'childrenAlbumsJson___images___url___ctime',
  childrenAlbumsJson___images___url___ctimeMs = 'childrenAlbumsJson___images___url___ctimeMs',
  childrenAlbumsJson___images___url___dev = 'childrenAlbumsJson___images___url___dev',
  childrenAlbumsJson___images___url___dir = 'childrenAlbumsJson___images___url___dir',
  childrenAlbumsJson___images___url___ext = 'childrenAlbumsJson___images___url___ext',
  childrenAlbumsJson___images___url___extension = 'childrenAlbumsJson___images___url___extension',
  childrenAlbumsJson___images___url___gid = 'childrenAlbumsJson___images___url___gid',
  childrenAlbumsJson___images___url___id = 'childrenAlbumsJson___images___url___id',
  childrenAlbumsJson___images___url___ino = 'childrenAlbumsJson___images___url___ino',
  childrenAlbumsJson___images___url___mode = 'childrenAlbumsJson___images___url___mode',
  childrenAlbumsJson___images___url___modifiedTime = 'childrenAlbumsJson___images___url___modifiedTime',
  childrenAlbumsJson___images___url___mtime = 'childrenAlbumsJson___images___url___mtime',
  childrenAlbumsJson___images___url___mtimeMs = 'childrenAlbumsJson___images___url___mtimeMs',
  childrenAlbumsJson___images___url___name = 'childrenAlbumsJson___images___url___name',
  childrenAlbumsJson___images___url___nlink = 'childrenAlbumsJson___images___url___nlink',
  childrenAlbumsJson___images___url___prettySize = 'childrenAlbumsJson___images___url___prettySize',
  childrenAlbumsJson___images___url___publicURL = 'childrenAlbumsJson___images___url___publicURL',
  childrenAlbumsJson___images___url___rdev = 'childrenAlbumsJson___images___url___rdev',
  childrenAlbumsJson___images___url___relativeDirectory = 'childrenAlbumsJson___images___url___relativeDirectory',
  childrenAlbumsJson___images___url___relativePath = 'childrenAlbumsJson___images___url___relativePath',
  childrenAlbumsJson___images___url___root = 'childrenAlbumsJson___images___url___root',
  childrenAlbumsJson___images___url___size = 'childrenAlbumsJson___images___url___size',
  childrenAlbumsJson___images___url___sourceInstanceName = 'childrenAlbumsJson___images___url___sourceInstanceName',
  childrenAlbumsJson___images___url___uid = 'childrenAlbumsJson___images___url___uid',
  childrenAlbumsJson___internal___content = 'childrenAlbumsJson___internal___content',
  childrenAlbumsJson___internal___contentDigest = 'childrenAlbumsJson___internal___contentDigest',
  childrenAlbumsJson___internal___description = 'childrenAlbumsJson___internal___description',
  childrenAlbumsJson___internal___fieldOwners = 'childrenAlbumsJson___internal___fieldOwners',
  childrenAlbumsJson___internal___ignoreType = 'childrenAlbumsJson___internal___ignoreType',
  childrenAlbumsJson___internal___mediaType = 'childrenAlbumsJson___internal___mediaType',
  childrenAlbumsJson___internal___owner = 'childrenAlbumsJson___internal___owner',
  childrenAlbumsJson___internal___type = 'childrenAlbumsJson___internal___type',
  childrenAlbumsJson___parent___children = 'childrenAlbumsJson___parent___children',
  childrenAlbumsJson___parent___children___children = 'childrenAlbumsJson___parent___children___children',
  childrenAlbumsJson___parent___children___id = 'childrenAlbumsJson___parent___children___id',
  childrenAlbumsJson___parent___id = 'childrenAlbumsJson___parent___id',
  childrenAlbumsJson___parent___internal___content = 'childrenAlbumsJson___parent___internal___content',
  childrenAlbumsJson___parent___internal___contentDigest = 'childrenAlbumsJson___parent___internal___contentDigest',
  childrenAlbumsJson___parent___internal___description = 'childrenAlbumsJson___parent___internal___description',
  childrenAlbumsJson___parent___internal___fieldOwners = 'childrenAlbumsJson___parent___internal___fieldOwners',
  childrenAlbumsJson___parent___internal___ignoreType = 'childrenAlbumsJson___parent___internal___ignoreType',
  childrenAlbumsJson___parent___internal___mediaType = 'childrenAlbumsJson___parent___internal___mediaType',
  childrenAlbumsJson___parent___internal___owner = 'childrenAlbumsJson___parent___internal___owner',
  childrenAlbumsJson___parent___internal___type = 'childrenAlbumsJson___parent___internal___type',
  childrenAlbumsJson___parent___parent___children = 'childrenAlbumsJson___parent___parent___children',
  childrenAlbumsJson___parent___parent___id = 'childrenAlbumsJson___parent___parent___id',
  childrenAlbumsJson___title = 'childrenAlbumsJson___title',
  childrenBackstageJson = 'childrenBackstageJson',
  childrenBackstageJson___children = 'childrenBackstageJson___children',
  childrenBackstageJson___children___children = 'childrenBackstageJson___children___children',
  childrenBackstageJson___children___children___children = 'childrenBackstageJson___children___children___children',
  childrenBackstageJson___children___children___id = 'childrenBackstageJson___children___children___id',
  childrenBackstageJson___children___id = 'childrenBackstageJson___children___id',
  childrenBackstageJson___children___internal___content = 'childrenBackstageJson___children___internal___content',
  childrenBackstageJson___children___internal___contentDigest = 'childrenBackstageJson___children___internal___contentDigest',
  childrenBackstageJson___children___internal___description = 'childrenBackstageJson___children___internal___description',
  childrenBackstageJson___children___internal___fieldOwners = 'childrenBackstageJson___children___internal___fieldOwners',
  childrenBackstageJson___children___internal___ignoreType = 'childrenBackstageJson___children___internal___ignoreType',
  childrenBackstageJson___children___internal___mediaType = 'childrenBackstageJson___children___internal___mediaType',
  childrenBackstageJson___children___internal___owner = 'childrenBackstageJson___children___internal___owner',
  childrenBackstageJson___children___internal___type = 'childrenBackstageJson___children___internal___type',
  childrenBackstageJson___children___parent___children = 'childrenBackstageJson___children___parent___children',
  childrenBackstageJson___children___parent___id = 'childrenBackstageJson___children___parent___id',
  childrenBackstageJson___id = 'childrenBackstageJson___id',
  childrenBackstageJson___internal___content = 'childrenBackstageJson___internal___content',
  childrenBackstageJson___internal___contentDigest = 'childrenBackstageJson___internal___contentDigest',
  childrenBackstageJson___internal___description = 'childrenBackstageJson___internal___description',
  childrenBackstageJson___internal___fieldOwners = 'childrenBackstageJson___internal___fieldOwners',
  childrenBackstageJson___internal___ignoreType = 'childrenBackstageJson___internal___ignoreType',
  childrenBackstageJson___internal___mediaType = 'childrenBackstageJson___internal___mediaType',
  childrenBackstageJson___internal___owner = 'childrenBackstageJson___internal___owner',
  childrenBackstageJson___internal___type = 'childrenBackstageJson___internal___type',
  childrenBackstageJson___parent___children = 'childrenBackstageJson___parent___children',
  childrenBackstageJson___parent___children___children = 'childrenBackstageJson___parent___children___children',
  childrenBackstageJson___parent___children___id = 'childrenBackstageJson___parent___children___id',
  childrenBackstageJson___parent___id = 'childrenBackstageJson___parent___id',
  childrenBackstageJson___parent___internal___content = 'childrenBackstageJson___parent___internal___content',
  childrenBackstageJson___parent___internal___contentDigest = 'childrenBackstageJson___parent___internal___contentDigest',
  childrenBackstageJson___parent___internal___description = 'childrenBackstageJson___parent___internal___description',
  childrenBackstageJson___parent___internal___fieldOwners = 'childrenBackstageJson___parent___internal___fieldOwners',
  childrenBackstageJson___parent___internal___ignoreType = 'childrenBackstageJson___parent___internal___ignoreType',
  childrenBackstageJson___parent___internal___mediaType = 'childrenBackstageJson___parent___internal___mediaType',
  childrenBackstageJson___parent___internal___owner = 'childrenBackstageJson___parent___internal___owner',
  childrenBackstageJson___parent___internal___type = 'childrenBackstageJson___parent___internal___type',
  childrenBackstageJson___parent___parent___children = 'childrenBackstageJson___parent___parent___children',
  childrenBackstageJson___parent___parent___id = 'childrenBackstageJson___parent___parent___id',
  childrenBackstageJson___title = 'childrenBackstageJson___title',
  childrenContactsJson = 'childrenContactsJson',
  childrenContactsJson___children = 'childrenContactsJson___children',
  childrenContactsJson___children___children = 'childrenContactsJson___children___children',
  childrenContactsJson___children___children___children = 'childrenContactsJson___children___children___children',
  childrenContactsJson___children___children___id = 'childrenContactsJson___children___children___id',
  childrenContactsJson___children___id = 'childrenContactsJson___children___id',
  childrenContactsJson___children___internal___content = 'childrenContactsJson___children___internal___content',
  childrenContactsJson___children___internal___contentDigest = 'childrenContactsJson___children___internal___contentDigest',
  childrenContactsJson___children___internal___description = 'childrenContactsJson___children___internal___description',
  childrenContactsJson___children___internal___fieldOwners = 'childrenContactsJson___children___internal___fieldOwners',
  childrenContactsJson___children___internal___ignoreType = 'childrenContactsJson___children___internal___ignoreType',
  childrenContactsJson___children___internal___mediaType = 'childrenContactsJson___children___internal___mediaType',
  childrenContactsJson___children___internal___owner = 'childrenContactsJson___children___internal___owner',
  childrenContactsJson___children___internal___type = 'childrenContactsJson___children___internal___type',
  childrenContactsJson___children___parent___children = 'childrenContactsJson___children___parent___children',
  childrenContactsJson___children___parent___id = 'childrenContactsJson___children___parent___id',
  childrenContactsJson___id = 'childrenContactsJson___id',
  childrenContactsJson___internal___content = 'childrenContactsJson___internal___content',
  childrenContactsJson___internal___contentDigest = 'childrenContactsJson___internal___contentDigest',
  childrenContactsJson___internal___description = 'childrenContactsJson___internal___description',
  childrenContactsJson___internal___fieldOwners = 'childrenContactsJson___internal___fieldOwners',
  childrenContactsJson___internal___ignoreType = 'childrenContactsJson___internal___ignoreType',
  childrenContactsJson___internal___mediaType = 'childrenContactsJson___internal___mediaType',
  childrenContactsJson___internal___owner = 'childrenContactsJson___internal___owner',
  childrenContactsJson___internal___type = 'childrenContactsJson___internal___type',
  childrenContactsJson___parent___children = 'childrenContactsJson___parent___children',
  childrenContactsJson___parent___children___children = 'childrenContactsJson___parent___children___children',
  childrenContactsJson___parent___children___id = 'childrenContactsJson___parent___children___id',
  childrenContactsJson___parent___id = 'childrenContactsJson___parent___id',
  childrenContactsJson___parent___internal___content = 'childrenContactsJson___parent___internal___content',
  childrenContactsJson___parent___internal___contentDigest = 'childrenContactsJson___parent___internal___contentDigest',
  childrenContactsJson___parent___internal___description = 'childrenContactsJson___parent___internal___description',
  childrenContactsJson___parent___internal___fieldOwners = 'childrenContactsJson___parent___internal___fieldOwners',
  childrenContactsJson___parent___internal___ignoreType = 'childrenContactsJson___parent___internal___ignoreType',
  childrenContactsJson___parent___internal___mediaType = 'childrenContactsJson___parent___internal___mediaType',
  childrenContactsJson___parent___internal___owner = 'childrenContactsJson___parent___internal___owner',
  childrenContactsJson___parent___internal___type = 'childrenContactsJson___parent___internal___type',
  childrenContactsJson___parent___parent___children = 'childrenContactsJson___parent___parent___children',
  childrenContactsJson___parent___parent___id = 'childrenContactsJson___parent___parent___id',
  childrenContactsJson___title = 'childrenContactsJson___title',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenPicsJson = 'childrenPicsJson',
  childrenPicsJson___children = 'childrenPicsJson___children',
  childrenPicsJson___children___children = 'childrenPicsJson___children___children',
  childrenPicsJson___children___children___children = 'childrenPicsJson___children___children___children',
  childrenPicsJson___children___children___id = 'childrenPicsJson___children___children___id',
  childrenPicsJson___children___id = 'childrenPicsJson___children___id',
  childrenPicsJson___children___internal___content = 'childrenPicsJson___children___internal___content',
  childrenPicsJson___children___internal___contentDigest = 'childrenPicsJson___children___internal___contentDigest',
  childrenPicsJson___children___internal___description = 'childrenPicsJson___children___internal___description',
  childrenPicsJson___children___internal___fieldOwners = 'childrenPicsJson___children___internal___fieldOwners',
  childrenPicsJson___children___internal___ignoreType = 'childrenPicsJson___children___internal___ignoreType',
  childrenPicsJson___children___internal___mediaType = 'childrenPicsJson___children___internal___mediaType',
  childrenPicsJson___children___internal___owner = 'childrenPicsJson___children___internal___owner',
  childrenPicsJson___children___internal___type = 'childrenPicsJson___children___internal___type',
  childrenPicsJson___children___parent___children = 'childrenPicsJson___children___parent___children',
  childrenPicsJson___children___parent___id = 'childrenPicsJson___children___parent___id',
  childrenPicsJson___id = 'childrenPicsJson___id',
  childrenPicsJson___internal___content = 'childrenPicsJson___internal___content',
  childrenPicsJson___internal___contentDigest = 'childrenPicsJson___internal___contentDigest',
  childrenPicsJson___internal___description = 'childrenPicsJson___internal___description',
  childrenPicsJson___internal___fieldOwners = 'childrenPicsJson___internal___fieldOwners',
  childrenPicsJson___internal___ignoreType = 'childrenPicsJson___internal___ignoreType',
  childrenPicsJson___internal___mediaType = 'childrenPicsJson___internal___mediaType',
  childrenPicsJson___internal___owner = 'childrenPicsJson___internal___owner',
  childrenPicsJson___internal___type = 'childrenPicsJson___internal___type',
  childrenPicsJson___parent___children = 'childrenPicsJson___parent___children',
  childrenPicsJson___parent___children___children = 'childrenPicsJson___parent___children___children',
  childrenPicsJson___parent___children___id = 'childrenPicsJson___parent___children___id',
  childrenPicsJson___parent___id = 'childrenPicsJson___parent___id',
  childrenPicsJson___parent___internal___content = 'childrenPicsJson___parent___internal___content',
  childrenPicsJson___parent___internal___contentDigest = 'childrenPicsJson___parent___internal___contentDigest',
  childrenPicsJson___parent___internal___description = 'childrenPicsJson___parent___internal___description',
  childrenPicsJson___parent___internal___fieldOwners = 'childrenPicsJson___parent___internal___fieldOwners',
  childrenPicsJson___parent___internal___ignoreType = 'childrenPicsJson___parent___internal___ignoreType',
  childrenPicsJson___parent___internal___mediaType = 'childrenPicsJson___parent___internal___mediaType',
  childrenPicsJson___parent___internal___owner = 'childrenPicsJson___parent___internal___owner',
  childrenPicsJson___parent___internal___type = 'childrenPicsJson___parent___internal___type',
  childrenPicsJson___parent___parent___children = 'childrenPicsJson___parent___parent___children',
  childrenPicsJson___parent___parent___id = 'childrenPicsJson___parent___parent___id',
  childrenPicsJson___pictures = 'childrenPicsJson___pictures',
  childrenPicsJson___pictures___background = 'childrenPicsJson___pictures___background',
  childrenPicsJson___pictures___children = 'childrenPicsJson___pictures___children',
  childrenPicsJson___pictures___children___children = 'childrenPicsJson___pictures___children___children',
  childrenPicsJson___pictures___children___id = 'childrenPicsJson___pictures___children___id',
  childrenPicsJson___pictures___description = 'childrenPicsJson___pictures___description',
  childrenPicsJson___pictures___fields___slug = 'childrenPicsJson___pictures___fields___slug',
  childrenPicsJson___pictures___id = 'childrenPicsJson___pictures___id',
  childrenPicsJson___pictures___image___absolutePath = 'childrenPicsJson___pictures___image___absolutePath',
  childrenPicsJson___pictures___image___accessTime = 'childrenPicsJson___pictures___image___accessTime',
  childrenPicsJson___pictures___image___atime = 'childrenPicsJson___pictures___image___atime',
  childrenPicsJson___pictures___image___atimeMs = 'childrenPicsJson___pictures___image___atimeMs',
  childrenPicsJson___pictures___image___base = 'childrenPicsJson___pictures___image___base',
  childrenPicsJson___pictures___image___birthTime = 'childrenPicsJson___pictures___image___birthTime',
  childrenPicsJson___pictures___image___birthtime = 'childrenPicsJson___pictures___image___birthtime',
  childrenPicsJson___pictures___image___birthtimeMs = 'childrenPicsJson___pictures___image___birthtimeMs',
  childrenPicsJson___pictures___image___blksize = 'childrenPicsJson___pictures___image___blksize',
  childrenPicsJson___pictures___image___blocks = 'childrenPicsJson___pictures___image___blocks',
  childrenPicsJson___pictures___image___changeTime = 'childrenPicsJson___pictures___image___changeTime',
  childrenPicsJson___pictures___image___children = 'childrenPicsJson___pictures___image___children',
  childrenPicsJson___pictures___image___childrenAboutJson = 'childrenPicsJson___pictures___image___childrenAboutJson',
  childrenPicsJson___pictures___image___childrenAlbumsJson = 'childrenPicsJson___pictures___image___childrenAlbumsJson',
  childrenPicsJson___pictures___image___childrenBackstageJson = 'childrenPicsJson___pictures___image___childrenBackstageJson',
  childrenPicsJson___pictures___image___childrenContactsJson = 'childrenPicsJson___pictures___image___childrenContactsJson',
  childrenPicsJson___pictures___image___childrenImageSharp = 'childrenPicsJson___pictures___image___childrenImageSharp',
  childrenPicsJson___pictures___image___childrenPicsJson = 'childrenPicsJson___pictures___image___childrenPicsJson',
  childrenPicsJson___pictures___image___childrenPicturesJson = 'childrenPicsJson___pictures___image___childrenPicturesJson',
  childrenPicsJson___pictures___image___childrenSeriesJson = 'childrenPicsJson___pictures___image___childrenSeriesJson',
  childrenPicsJson___pictures___image___ctime = 'childrenPicsJson___pictures___image___ctime',
  childrenPicsJson___pictures___image___ctimeMs = 'childrenPicsJson___pictures___image___ctimeMs',
  childrenPicsJson___pictures___image___dev = 'childrenPicsJson___pictures___image___dev',
  childrenPicsJson___pictures___image___dir = 'childrenPicsJson___pictures___image___dir',
  childrenPicsJson___pictures___image___ext = 'childrenPicsJson___pictures___image___ext',
  childrenPicsJson___pictures___image___extension = 'childrenPicsJson___pictures___image___extension',
  childrenPicsJson___pictures___image___gid = 'childrenPicsJson___pictures___image___gid',
  childrenPicsJson___pictures___image___id = 'childrenPicsJson___pictures___image___id',
  childrenPicsJson___pictures___image___ino = 'childrenPicsJson___pictures___image___ino',
  childrenPicsJson___pictures___image___mode = 'childrenPicsJson___pictures___image___mode',
  childrenPicsJson___pictures___image___modifiedTime = 'childrenPicsJson___pictures___image___modifiedTime',
  childrenPicsJson___pictures___image___mtime = 'childrenPicsJson___pictures___image___mtime',
  childrenPicsJson___pictures___image___mtimeMs = 'childrenPicsJson___pictures___image___mtimeMs',
  childrenPicsJson___pictures___image___name = 'childrenPicsJson___pictures___image___name',
  childrenPicsJson___pictures___image___nlink = 'childrenPicsJson___pictures___image___nlink',
  childrenPicsJson___pictures___image___prettySize = 'childrenPicsJson___pictures___image___prettySize',
  childrenPicsJson___pictures___image___publicURL = 'childrenPicsJson___pictures___image___publicURL',
  childrenPicsJson___pictures___image___rdev = 'childrenPicsJson___pictures___image___rdev',
  childrenPicsJson___pictures___image___relativeDirectory = 'childrenPicsJson___pictures___image___relativeDirectory',
  childrenPicsJson___pictures___image___relativePath = 'childrenPicsJson___pictures___image___relativePath',
  childrenPicsJson___pictures___image___root = 'childrenPicsJson___pictures___image___root',
  childrenPicsJson___pictures___image___size = 'childrenPicsJson___pictures___image___size',
  childrenPicsJson___pictures___image___sourceInstanceName = 'childrenPicsJson___pictures___image___sourceInstanceName',
  childrenPicsJson___pictures___image___uid = 'childrenPicsJson___pictures___image___uid',
  childrenPicsJson___pictures___internal___content = 'childrenPicsJson___pictures___internal___content',
  childrenPicsJson___pictures___internal___contentDigest = 'childrenPicsJson___pictures___internal___contentDigest',
  childrenPicsJson___pictures___internal___description = 'childrenPicsJson___pictures___internal___description',
  childrenPicsJson___pictures___internal___fieldOwners = 'childrenPicsJson___pictures___internal___fieldOwners',
  childrenPicsJson___pictures___internal___ignoreType = 'childrenPicsJson___pictures___internal___ignoreType',
  childrenPicsJson___pictures___internal___mediaType = 'childrenPicsJson___pictures___internal___mediaType',
  childrenPicsJson___pictures___internal___owner = 'childrenPicsJson___pictures___internal___owner',
  childrenPicsJson___pictures___internal___type = 'childrenPicsJson___pictures___internal___type',
  childrenPicsJson___pictures___parent___children = 'childrenPicsJson___pictures___parent___children',
  childrenPicsJson___pictures___parent___id = 'childrenPicsJson___pictures___parent___id',
  childrenPicsJson___pictures___title = 'childrenPicsJson___pictures___title',
  childrenPicsJson___title = 'childrenPicsJson___title',
  childrenPicturesJson = 'childrenPicturesJson',
  childrenPicturesJson___background = 'childrenPicturesJson___background',
  childrenPicturesJson___children = 'childrenPicturesJson___children',
  childrenPicturesJson___children___children = 'childrenPicturesJson___children___children',
  childrenPicturesJson___children___children___children = 'childrenPicturesJson___children___children___children',
  childrenPicturesJson___children___children___id = 'childrenPicturesJson___children___children___id',
  childrenPicturesJson___children___id = 'childrenPicturesJson___children___id',
  childrenPicturesJson___children___internal___content = 'childrenPicturesJson___children___internal___content',
  childrenPicturesJson___children___internal___contentDigest = 'childrenPicturesJson___children___internal___contentDigest',
  childrenPicturesJson___children___internal___description = 'childrenPicturesJson___children___internal___description',
  childrenPicturesJson___children___internal___fieldOwners = 'childrenPicturesJson___children___internal___fieldOwners',
  childrenPicturesJson___children___internal___ignoreType = 'childrenPicturesJson___children___internal___ignoreType',
  childrenPicturesJson___children___internal___mediaType = 'childrenPicturesJson___children___internal___mediaType',
  childrenPicturesJson___children___internal___owner = 'childrenPicturesJson___children___internal___owner',
  childrenPicturesJson___children___internal___type = 'childrenPicturesJson___children___internal___type',
  childrenPicturesJson___children___parent___children = 'childrenPicturesJson___children___parent___children',
  childrenPicturesJson___children___parent___id = 'childrenPicturesJson___children___parent___id',
  childrenPicturesJson___description = 'childrenPicturesJson___description',
  childrenPicturesJson___fields___slug = 'childrenPicturesJson___fields___slug',
  childrenPicturesJson___id = 'childrenPicturesJson___id',
  childrenPicturesJson___image___absolutePath = 'childrenPicturesJson___image___absolutePath',
  childrenPicturesJson___image___accessTime = 'childrenPicturesJson___image___accessTime',
  childrenPicturesJson___image___atime = 'childrenPicturesJson___image___atime',
  childrenPicturesJson___image___atimeMs = 'childrenPicturesJson___image___atimeMs',
  childrenPicturesJson___image___base = 'childrenPicturesJson___image___base',
  childrenPicturesJson___image___birthTime = 'childrenPicturesJson___image___birthTime',
  childrenPicturesJson___image___birthtime = 'childrenPicturesJson___image___birthtime',
  childrenPicturesJson___image___birthtimeMs = 'childrenPicturesJson___image___birthtimeMs',
  childrenPicturesJson___image___blksize = 'childrenPicturesJson___image___blksize',
  childrenPicturesJson___image___blocks = 'childrenPicturesJson___image___blocks',
  childrenPicturesJson___image___changeTime = 'childrenPicturesJson___image___changeTime',
  childrenPicturesJson___image___childAboutJson___children = 'childrenPicturesJson___image___childAboutJson___children',
  childrenPicturesJson___image___childAboutJson___id = 'childrenPicturesJson___image___childAboutJson___id',
  childrenPicturesJson___image___childAboutJson___title = 'childrenPicturesJson___image___childAboutJson___title',
  childrenPicturesJson___image___childAlbumsJson___background = 'childrenPicturesJson___image___childAlbumsJson___background',
  childrenPicturesJson___image___childAlbumsJson___children = 'childrenPicturesJson___image___childAlbumsJson___children',
  childrenPicturesJson___image___childAlbumsJson___description = 'childrenPicturesJson___image___childAlbumsJson___description',
  childrenPicturesJson___image___childAlbumsJson___gatsbyPath = 'childrenPicturesJson___image___childAlbumsJson___gatsbyPath',
  childrenPicturesJson___image___childAlbumsJson___id = 'childrenPicturesJson___image___childAlbumsJson___id',
  childrenPicturesJson___image___childAlbumsJson___images = 'childrenPicturesJson___image___childAlbumsJson___images',
  childrenPicturesJson___image___childAlbumsJson___title = 'childrenPicturesJson___image___childAlbumsJson___title',
  childrenPicturesJson___image___childBackstageJson___children = 'childrenPicturesJson___image___childBackstageJson___children',
  childrenPicturesJson___image___childBackstageJson___id = 'childrenPicturesJson___image___childBackstageJson___id',
  childrenPicturesJson___image___childBackstageJson___title = 'childrenPicturesJson___image___childBackstageJson___title',
  childrenPicturesJson___image___childContactsJson___children = 'childrenPicturesJson___image___childContactsJson___children',
  childrenPicturesJson___image___childContactsJson___id = 'childrenPicturesJson___image___childContactsJson___id',
  childrenPicturesJson___image___childContactsJson___title = 'childrenPicturesJson___image___childContactsJson___title',
  childrenPicturesJson___image___childImageSharp___children = 'childrenPicturesJson___image___childImageSharp___children',
  childrenPicturesJson___image___childImageSharp___gatsbyImageData = 'childrenPicturesJson___image___childImageSharp___gatsbyImageData',
  childrenPicturesJson___image___childImageSharp___id = 'childrenPicturesJson___image___childImageSharp___id',
  childrenPicturesJson___image___childPicsJson___children = 'childrenPicturesJson___image___childPicsJson___children',
  childrenPicturesJson___image___childPicsJson___id = 'childrenPicturesJson___image___childPicsJson___id',
  childrenPicturesJson___image___childPicsJson___pictures = 'childrenPicturesJson___image___childPicsJson___pictures',
  childrenPicturesJson___image___childPicsJson___title = 'childrenPicturesJson___image___childPicsJson___title',
  childrenPicturesJson___image___childPicturesJson___background = 'childrenPicturesJson___image___childPicturesJson___background',
  childrenPicturesJson___image___childPicturesJson___children = 'childrenPicturesJson___image___childPicturesJson___children',
  childrenPicturesJson___image___childPicturesJson___description = 'childrenPicturesJson___image___childPicturesJson___description',
  childrenPicturesJson___image___childPicturesJson___id = 'childrenPicturesJson___image___childPicturesJson___id',
  childrenPicturesJson___image___childPicturesJson___title = 'childrenPicturesJson___image___childPicturesJson___title',
  childrenPicturesJson___image___childSeriesJson___albums = 'childrenPicturesJson___image___childSeriesJson___albums',
  childrenPicturesJson___image___childSeriesJson___children = 'childrenPicturesJson___image___childSeriesJson___children',
  childrenPicturesJson___image___childSeriesJson___id = 'childrenPicturesJson___image___childSeriesJson___id',
  childrenPicturesJson___image___childSeriesJson___title = 'childrenPicturesJson___image___childSeriesJson___title',
  childrenPicturesJson___image___children = 'childrenPicturesJson___image___children',
  childrenPicturesJson___image___childrenAboutJson = 'childrenPicturesJson___image___childrenAboutJson',
  childrenPicturesJson___image___childrenAboutJson___children = 'childrenPicturesJson___image___childrenAboutJson___children',
  childrenPicturesJson___image___childrenAboutJson___id = 'childrenPicturesJson___image___childrenAboutJson___id',
  childrenPicturesJson___image___childrenAboutJson___title = 'childrenPicturesJson___image___childrenAboutJson___title',
  childrenPicturesJson___image___childrenAlbumsJson = 'childrenPicturesJson___image___childrenAlbumsJson',
  childrenPicturesJson___image___childrenAlbumsJson___background = 'childrenPicturesJson___image___childrenAlbumsJson___background',
  childrenPicturesJson___image___childrenAlbumsJson___children = 'childrenPicturesJson___image___childrenAlbumsJson___children',
  childrenPicturesJson___image___childrenAlbumsJson___description = 'childrenPicturesJson___image___childrenAlbumsJson___description',
  childrenPicturesJson___image___childrenAlbumsJson___gatsbyPath = 'childrenPicturesJson___image___childrenAlbumsJson___gatsbyPath',
  childrenPicturesJson___image___childrenAlbumsJson___id = 'childrenPicturesJson___image___childrenAlbumsJson___id',
  childrenPicturesJson___image___childrenAlbumsJson___images = 'childrenPicturesJson___image___childrenAlbumsJson___images',
  childrenPicturesJson___image___childrenAlbumsJson___title = 'childrenPicturesJson___image___childrenAlbumsJson___title',
  childrenPicturesJson___image___childrenBackstageJson = 'childrenPicturesJson___image___childrenBackstageJson',
  childrenPicturesJson___image___childrenBackstageJson___children = 'childrenPicturesJson___image___childrenBackstageJson___children',
  childrenPicturesJson___image___childrenBackstageJson___id = 'childrenPicturesJson___image___childrenBackstageJson___id',
  childrenPicturesJson___image___childrenBackstageJson___title = 'childrenPicturesJson___image___childrenBackstageJson___title',
  childrenPicturesJson___image___childrenContactsJson = 'childrenPicturesJson___image___childrenContactsJson',
  childrenPicturesJson___image___childrenContactsJson___children = 'childrenPicturesJson___image___childrenContactsJson___children',
  childrenPicturesJson___image___childrenContactsJson___id = 'childrenPicturesJson___image___childrenContactsJson___id',
  childrenPicturesJson___image___childrenContactsJson___title = 'childrenPicturesJson___image___childrenContactsJson___title',
  childrenPicturesJson___image___childrenImageSharp = 'childrenPicturesJson___image___childrenImageSharp',
  childrenPicturesJson___image___childrenImageSharp___children = 'childrenPicturesJson___image___childrenImageSharp___children',
  childrenPicturesJson___image___childrenImageSharp___gatsbyImageData = 'childrenPicturesJson___image___childrenImageSharp___gatsbyImageData',
  childrenPicturesJson___image___childrenImageSharp___id = 'childrenPicturesJson___image___childrenImageSharp___id',
  childrenPicturesJson___image___childrenPicsJson = 'childrenPicturesJson___image___childrenPicsJson',
  childrenPicturesJson___image___childrenPicsJson___children = 'childrenPicturesJson___image___childrenPicsJson___children',
  childrenPicturesJson___image___childrenPicsJson___id = 'childrenPicturesJson___image___childrenPicsJson___id',
  childrenPicturesJson___image___childrenPicsJson___pictures = 'childrenPicturesJson___image___childrenPicsJson___pictures',
  childrenPicturesJson___image___childrenPicsJson___title = 'childrenPicturesJson___image___childrenPicsJson___title',
  childrenPicturesJson___image___childrenPicturesJson = 'childrenPicturesJson___image___childrenPicturesJson',
  childrenPicturesJson___image___childrenPicturesJson___background = 'childrenPicturesJson___image___childrenPicturesJson___background',
  childrenPicturesJson___image___childrenPicturesJson___children = 'childrenPicturesJson___image___childrenPicturesJson___children',
  childrenPicturesJson___image___childrenPicturesJson___description = 'childrenPicturesJson___image___childrenPicturesJson___description',
  childrenPicturesJson___image___childrenPicturesJson___id = 'childrenPicturesJson___image___childrenPicturesJson___id',
  childrenPicturesJson___image___childrenPicturesJson___title = 'childrenPicturesJson___image___childrenPicturesJson___title',
  childrenPicturesJson___image___childrenSeriesJson = 'childrenPicturesJson___image___childrenSeriesJson',
  childrenPicturesJson___image___childrenSeriesJson___albums = 'childrenPicturesJson___image___childrenSeriesJson___albums',
  childrenPicturesJson___image___childrenSeriesJson___children = 'childrenPicturesJson___image___childrenSeriesJson___children',
  childrenPicturesJson___image___childrenSeriesJson___id = 'childrenPicturesJson___image___childrenSeriesJson___id',
  childrenPicturesJson___image___childrenSeriesJson___title = 'childrenPicturesJson___image___childrenSeriesJson___title',
  childrenPicturesJson___image___children___children = 'childrenPicturesJson___image___children___children',
  childrenPicturesJson___image___children___id = 'childrenPicturesJson___image___children___id',
  childrenPicturesJson___image___ctime = 'childrenPicturesJson___image___ctime',
  childrenPicturesJson___image___ctimeMs = 'childrenPicturesJson___image___ctimeMs',
  childrenPicturesJson___image___dev = 'childrenPicturesJson___image___dev',
  childrenPicturesJson___image___dir = 'childrenPicturesJson___image___dir',
  childrenPicturesJson___image___ext = 'childrenPicturesJson___image___ext',
  childrenPicturesJson___image___extension = 'childrenPicturesJson___image___extension',
  childrenPicturesJson___image___gid = 'childrenPicturesJson___image___gid',
  childrenPicturesJson___image___id = 'childrenPicturesJson___image___id',
  childrenPicturesJson___image___ino = 'childrenPicturesJson___image___ino',
  childrenPicturesJson___image___internal___content = 'childrenPicturesJson___image___internal___content',
  childrenPicturesJson___image___internal___contentDigest = 'childrenPicturesJson___image___internal___contentDigest',
  childrenPicturesJson___image___internal___description = 'childrenPicturesJson___image___internal___description',
  childrenPicturesJson___image___internal___fieldOwners = 'childrenPicturesJson___image___internal___fieldOwners',
  childrenPicturesJson___image___internal___ignoreType = 'childrenPicturesJson___image___internal___ignoreType',
  childrenPicturesJson___image___internal___mediaType = 'childrenPicturesJson___image___internal___mediaType',
  childrenPicturesJson___image___internal___owner = 'childrenPicturesJson___image___internal___owner',
  childrenPicturesJson___image___internal___type = 'childrenPicturesJson___image___internal___type',
  childrenPicturesJson___image___mode = 'childrenPicturesJson___image___mode',
  childrenPicturesJson___image___modifiedTime = 'childrenPicturesJson___image___modifiedTime',
  childrenPicturesJson___image___mtime = 'childrenPicturesJson___image___mtime',
  childrenPicturesJson___image___mtimeMs = 'childrenPicturesJson___image___mtimeMs',
  childrenPicturesJson___image___name = 'childrenPicturesJson___image___name',
  childrenPicturesJson___image___nlink = 'childrenPicturesJson___image___nlink',
  childrenPicturesJson___image___parent___children = 'childrenPicturesJson___image___parent___children',
  childrenPicturesJson___image___parent___id = 'childrenPicturesJson___image___parent___id',
  childrenPicturesJson___image___prettySize = 'childrenPicturesJson___image___prettySize',
  childrenPicturesJson___image___publicURL = 'childrenPicturesJson___image___publicURL',
  childrenPicturesJson___image___rdev = 'childrenPicturesJson___image___rdev',
  childrenPicturesJson___image___relativeDirectory = 'childrenPicturesJson___image___relativeDirectory',
  childrenPicturesJson___image___relativePath = 'childrenPicturesJson___image___relativePath',
  childrenPicturesJson___image___root = 'childrenPicturesJson___image___root',
  childrenPicturesJson___image___size = 'childrenPicturesJson___image___size',
  childrenPicturesJson___image___sourceInstanceName = 'childrenPicturesJson___image___sourceInstanceName',
  childrenPicturesJson___image___uid = 'childrenPicturesJson___image___uid',
  childrenPicturesJson___internal___content = 'childrenPicturesJson___internal___content',
  childrenPicturesJson___internal___contentDigest = 'childrenPicturesJson___internal___contentDigest',
  childrenPicturesJson___internal___description = 'childrenPicturesJson___internal___description',
  childrenPicturesJson___internal___fieldOwners = 'childrenPicturesJson___internal___fieldOwners',
  childrenPicturesJson___internal___ignoreType = 'childrenPicturesJson___internal___ignoreType',
  childrenPicturesJson___internal___mediaType = 'childrenPicturesJson___internal___mediaType',
  childrenPicturesJson___internal___owner = 'childrenPicturesJson___internal___owner',
  childrenPicturesJson___internal___type = 'childrenPicturesJson___internal___type',
  childrenPicturesJson___parent___children = 'childrenPicturesJson___parent___children',
  childrenPicturesJson___parent___children___children = 'childrenPicturesJson___parent___children___children',
  childrenPicturesJson___parent___children___id = 'childrenPicturesJson___parent___children___id',
  childrenPicturesJson___parent___id = 'childrenPicturesJson___parent___id',
  childrenPicturesJson___parent___internal___content = 'childrenPicturesJson___parent___internal___content',
  childrenPicturesJson___parent___internal___contentDigest = 'childrenPicturesJson___parent___internal___contentDigest',
  childrenPicturesJson___parent___internal___description = 'childrenPicturesJson___parent___internal___description',
  childrenPicturesJson___parent___internal___fieldOwners = 'childrenPicturesJson___parent___internal___fieldOwners',
  childrenPicturesJson___parent___internal___ignoreType = 'childrenPicturesJson___parent___internal___ignoreType',
  childrenPicturesJson___parent___internal___mediaType = 'childrenPicturesJson___parent___internal___mediaType',
  childrenPicturesJson___parent___internal___owner = 'childrenPicturesJson___parent___internal___owner',
  childrenPicturesJson___parent___internal___type = 'childrenPicturesJson___parent___internal___type',
  childrenPicturesJson___parent___parent___children = 'childrenPicturesJson___parent___parent___children',
  childrenPicturesJson___parent___parent___id = 'childrenPicturesJson___parent___parent___id',
  childrenPicturesJson___title = 'childrenPicturesJson___title',
  childrenSeriesJson = 'childrenSeriesJson',
  childrenSeriesJson___albums = 'childrenSeriesJson___albums',
  childrenSeriesJson___albums___background = 'childrenSeriesJson___albums___background',
  childrenSeriesJson___albums___children = 'childrenSeriesJson___albums___children',
  childrenSeriesJson___albums___children___children = 'childrenSeriesJson___albums___children___children',
  childrenSeriesJson___albums___children___id = 'childrenSeriesJson___albums___children___id',
  childrenSeriesJson___albums___description = 'childrenSeriesJson___albums___description',
  childrenSeriesJson___albums___fields___slug = 'childrenSeriesJson___albums___fields___slug',
  childrenSeriesJson___albums___gatsbyPath = 'childrenSeriesJson___albums___gatsbyPath',
  childrenSeriesJson___albums___id = 'childrenSeriesJson___albums___id',
  childrenSeriesJson___albums___images = 'childrenSeriesJson___albums___images',
  childrenSeriesJson___albums___images___cover = 'childrenSeriesJson___albums___images___cover',
  childrenSeriesJson___albums___internal___content = 'childrenSeriesJson___albums___internal___content',
  childrenSeriesJson___albums___internal___contentDigest = 'childrenSeriesJson___albums___internal___contentDigest',
  childrenSeriesJson___albums___internal___description = 'childrenSeriesJson___albums___internal___description',
  childrenSeriesJson___albums___internal___fieldOwners = 'childrenSeriesJson___albums___internal___fieldOwners',
  childrenSeriesJson___albums___internal___ignoreType = 'childrenSeriesJson___albums___internal___ignoreType',
  childrenSeriesJson___albums___internal___mediaType = 'childrenSeriesJson___albums___internal___mediaType',
  childrenSeriesJson___albums___internal___owner = 'childrenSeriesJson___albums___internal___owner',
  childrenSeriesJson___albums___internal___type = 'childrenSeriesJson___albums___internal___type',
  childrenSeriesJson___albums___parent___children = 'childrenSeriesJson___albums___parent___children',
  childrenSeriesJson___albums___parent___id = 'childrenSeriesJson___albums___parent___id',
  childrenSeriesJson___albums___title = 'childrenSeriesJson___albums___title',
  childrenSeriesJson___children = 'childrenSeriesJson___children',
  childrenSeriesJson___children___children = 'childrenSeriesJson___children___children',
  childrenSeriesJson___children___children___children = 'childrenSeriesJson___children___children___children',
  childrenSeriesJson___children___children___id = 'childrenSeriesJson___children___children___id',
  childrenSeriesJson___children___id = 'childrenSeriesJson___children___id',
  childrenSeriesJson___children___internal___content = 'childrenSeriesJson___children___internal___content',
  childrenSeriesJson___children___internal___contentDigest = 'childrenSeriesJson___children___internal___contentDigest',
  childrenSeriesJson___children___internal___description = 'childrenSeriesJson___children___internal___description',
  childrenSeriesJson___children___internal___fieldOwners = 'childrenSeriesJson___children___internal___fieldOwners',
  childrenSeriesJson___children___internal___ignoreType = 'childrenSeriesJson___children___internal___ignoreType',
  childrenSeriesJson___children___internal___mediaType = 'childrenSeriesJson___children___internal___mediaType',
  childrenSeriesJson___children___internal___owner = 'childrenSeriesJson___children___internal___owner',
  childrenSeriesJson___children___internal___type = 'childrenSeriesJson___children___internal___type',
  childrenSeriesJson___children___parent___children = 'childrenSeriesJson___children___parent___children',
  childrenSeriesJson___children___parent___id = 'childrenSeriesJson___children___parent___id',
  childrenSeriesJson___id = 'childrenSeriesJson___id',
  childrenSeriesJson___internal___content = 'childrenSeriesJson___internal___content',
  childrenSeriesJson___internal___contentDigest = 'childrenSeriesJson___internal___contentDigest',
  childrenSeriesJson___internal___description = 'childrenSeriesJson___internal___description',
  childrenSeriesJson___internal___fieldOwners = 'childrenSeriesJson___internal___fieldOwners',
  childrenSeriesJson___internal___ignoreType = 'childrenSeriesJson___internal___ignoreType',
  childrenSeriesJson___internal___mediaType = 'childrenSeriesJson___internal___mediaType',
  childrenSeriesJson___internal___owner = 'childrenSeriesJson___internal___owner',
  childrenSeriesJson___internal___type = 'childrenSeriesJson___internal___type',
  childrenSeriesJson___parent___children = 'childrenSeriesJson___parent___children',
  childrenSeriesJson___parent___children___children = 'childrenSeriesJson___parent___children___children',
  childrenSeriesJson___parent___children___id = 'childrenSeriesJson___parent___children___id',
  childrenSeriesJson___parent___id = 'childrenSeriesJson___parent___id',
  childrenSeriesJson___parent___internal___content = 'childrenSeriesJson___parent___internal___content',
  childrenSeriesJson___parent___internal___contentDigest = 'childrenSeriesJson___parent___internal___contentDigest',
  childrenSeriesJson___parent___internal___description = 'childrenSeriesJson___parent___internal___description',
  childrenSeriesJson___parent___internal___fieldOwners = 'childrenSeriesJson___parent___internal___fieldOwners',
  childrenSeriesJson___parent___internal___ignoreType = 'childrenSeriesJson___parent___internal___ignoreType',
  childrenSeriesJson___parent___internal___mediaType = 'childrenSeriesJson___parent___internal___mediaType',
  childrenSeriesJson___parent___internal___owner = 'childrenSeriesJson___parent___internal___owner',
  childrenSeriesJson___parent___internal___type = 'childrenSeriesJson___parent___internal___type',
  childrenSeriesJson___parent___parent___children = 'childrenSeriesJson___parent___parent___children',
  childrenSeriesJson___parent___parent___id = 'childrenSeriesJson___parent___parent___id',
  childrenSeriesJson___title = 'childrenSeriesJson___title',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  publicURL = 'publicURL',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export interface FileFilterInput {
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly childAboutJson: Maybe<AboutJsonFilterInput>;
  readonly childAlbumsJson: Maybe<AlbumsJsonFilterInput>;
  readonly childBackstageJson: Maybe<BackstageJsonFilterInput>;
  readonly childContactsJson: Maybe<ContactsJsonFilterInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childPicsJson: Maybe<PicsJsonFilterInput>;
  readonly childPicturesJson: Maybe<PicturesJsonFilterInput>;
  readonly childSeriesJson: Maybe<SeriesJsonFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly childrenAboutJson: Maybe<AboutJsonFilterListInput>;
  readonly childrenAlbumsJson: Maybe<AlbumsJsonFilterListInput>;
  readonly childrenBackstageJson: Maybe<BackstageJsonFilterListInput>;
  readonly childrenContactsJson: Maybe<ContactsJsonFilterListInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childrenPicsJson: Maybe<PicsJsonFilterListInput>;
  readonly childrenPicturesJson: Maybe<PicturesJsonFilterListInput>;
  readonly childrenSeriesJson: Maybe<SeriesJsonFilterListInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
}

export interface FileGroupConnection {
  readonly __typename?: 'FileGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface FileGroupConnectionDistinctArgs {
  field: FileFieldsEnum;
}


export interface FileGroupConnectionGroupArgs {
  field: FileFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface FileGroupConnectionMaxArgs {
  field: FileFieldsEnum;
}


export interface FileGroupConnectionMinArgs {
  field: FileFieldsEnum;
}


export interface FileGroupConnectionSumArgs {
  field: FileFieldsEnum;
}

export interface FileSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface FloatQueryOperatorInput {
  readonly eq: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
}

export interface GatsbyImageDataQueryOperatorInput {
  readonly eq: Maybe<Scalars['GatsbyImageData']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['GatsbyImageData']>>>;
  readonly ne: Maybe<Scalars['GatsbyImageData']>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['GatsbyImageData']>>>;
}

export enum ImageCropFocus {
  ATTENTION = 'ATTENTION',
  CENTER = 'CENTER',
  EAST = 'EAST',
  ENTROPY = 'ENTROPY',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  NORTHWEST = 'NORTHWEST',
  SOUTH = 'SOUTH',
  SOUTHEAST = 'SOUTHEAST',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST'
}

export enum ImageFit {
  CONTAIN = 'CONTAIN',
  COVER = 'COVER',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum ImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export interface ImageSharp extends Node {
  readonly __typename?: 'ImageSharp';
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
}


export interface ImageSharpFixedArgs {
  background?: Maybe<Scalars['String']>;
  base64Width: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
}


export interface ImageSharpFluidArgs {
  background?: Maybe<Scalars['String']>;
  base64Width: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  maxWidth: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality: Maybe<Scalars['Int']>;
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
  background?: Maybe<Scalars['String']>;
  base64?: Maybe<Scalars['Boolean']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
}

export interface ImageSharpConnection {
  readonly __typename?: 'ImageSharpConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface ImageSharpConnectionDistinctArgs {
  field: ImageSharpFieldsEnum;
}


export interface ImageSharpConnectionGroupArgs {
  field: ImageSharpFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface ImageSharpEdge {
  readonly __typename?: 'ImageSharpEdge';
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
}

export enum ImageSharpFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___base64 = 'fixed___base64',
  fixed___height = 'fixed___height',
  fixed___originalName = 'fixed___originalName',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___width = 'fixed___width',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___base64 = 'fluid___base64',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationHeight = 'fluid___presentationHeight',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___sizes = 'fluid___sizes',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___tracedSVG = 'fluid___tracedSVG',
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  original___height = 'original___height',
  original___src = 'original___src',
  original___width = 'original___width',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___height = 'resize___height',
  resize___originalName = 'resize___originalName',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width'
}

export interface ImageSharpFilterInput {
  readonly children: Maybe<NodeFilterListInput>;
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<GatsbyImageDataQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
}

export interface ImageSharpFilterListInput {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
}

export interface ImageSharpFixed {
  readonly __typename?: 'ImageSharpFixed';
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
}

export interface ImageSharpFixedFilterInput {
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
}

export interface ImageSharpFluid {
  readonly __typename?: 'ImageSharpFluid';
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
}

export interface ImageSharpFluidFilterInput {
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpGroupConnection {
  readonly __typename?: 'ImageSharpGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface ImageSharpGroupConnectionDistinctArgs {
  field: ImageSharpFieldsEnum;
}


export interface ImageSharpGroupConnectionGroupArgs {
  field: ImageSharpFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface ImageSharpGroupConnectionMaxArgs {
  field: ImageSharpFieldsEnum;
}


export interface ImageSharpGroupConnectionMinArgs {
  field: ImageSharpFieldsEnum;
}


export interface ImageSharpGroupConnectionSumArgs {
  field: ImageSharpFieldsEnum;
}

export interface ImageSharpOriginal {
  readonly __typename?: 'ImageSharpOriginal';
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
}

export interface ImageSharpOriginalFilterInput {
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
}

export interface ImageSharpResize {
  readonly __typename?: 'ImageSharpResize';
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
}

export interface ImageSharpResizeFilterInput {
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
}

export interface ImageSharpSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface IntQueryOperatorInput {
  readonly eq: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
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
  readonly progressive: Maybe<Scalars['Boolean']>;
  readonly quality: Maybe<Scalars['Int']>;
}

export interface JsonQueryOperatorInput {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
}

export enum MarkdownExcerptFormats {
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN',
  PLAIN = 'PLAIN'
}

export interface MarkdownHeading {
  readonly __typename?: 'MarkdownHeading';
  readonly depth: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
}

export interface MarkdownHeadingFilterInput {
  readonly depth: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
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
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
}


export interface MarkdownRemarkExcerptArgs {
  format?: Maybe<MarkdownExcerptFormats>;
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
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
  heading: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  pathToSlugField?: Maybe<Scalars['String']>;
}

export interface MarkdownRemarkConnection {
  readonly __typename?: 'MarkdownRemarkConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface MarkdownRemarkConnectionDistinctArgs {
  field: MarkdownRemarkFieldsEnum;
}


export interface MarkdownRemarkConnectionGroupArgs {
  field: MarkdownRemarkFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface MarkdownRemarkEdge {
  readonly __typename?: 'MarkdownRemarkEdge';
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
}

export enum MarkdownRemarkFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  excerpt = 'excerpt',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___depth = 'headings___depth',
  headings___id = 'headings___id',
  headings___value = 'headings___value',
  html = 'html',
  htmlAst = 'htmlAst',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words'
}

export interface MarkdownRemarkFilterInput {
  readonly children: Maybe<NodeFilterListInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly excerptAst: Maybe<JsonQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JsonQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
}

export interface MarkdownRemarkGroupConnection {
  readonly __typename?: 'MarkdownRemarkGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface MarkdownRemarkGroupConnectionDistinctArgs {
  field: MarkdownRemarkFieldsEnum;
}


export interface MarkdownRemarkGroupConnectionGroupArgs {
  field: MarkdownRemarkFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface MarkdownRemarkGroupConnectionMaxArgs {
  field: MarkdownRemarkFieldsEnum;
}


export interface MarkdownRemarkGroupConnectionMinArgs {
  field: MarkdownRemarkFieldsEnum;
}


export interface MarkdownRemarkGroupConnectionSumArgs {
  field: MarkdownRemarkFieldsEnum;
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
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
}

export interface NodeFilterInput {
  readonly children: Maybe<NodeFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
}

export interface NodeFilterListInput {
  readonly elemMatch: Maybe<NodeFilterInput>;
}

export interface PngOptions {
  readonly compressionSpeed: Maybe<Scalars['Int']>;
  readonly quality: Maybe<Scalars['Int']>;
}

export interface PageInfo {
  readonly __typename?: 'PageInfo';
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
}

export interface PicsJson extends Node {
  readonly __typename?: 'PicsJson';
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly pictures: Maybe<ReadonlyArray<Maybe<PicturesJson>>>;
  readonly title: Maybe<Scalars['String']>;
}

export interface PicsJsonConnection {
  readonly __typename?: 'PicsJsonConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PicsJsonEdge>;
  readonly group: ReadonlyArray<PicsJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PicsJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface PicsJsonConnectionDistinctArgs {
  field: PicsJsonFieldsEnum;
}


export interface PicsJsonConnectionGroupArgs {
  field: PicsJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface PicsJsonEdge {
  readonly __typename?: 'PicsJsonEdge';
  readonly next: Maybe<PicsJson>;
  readonly node: PicsJson;
  readonly previous: Maybe<PicsJson>;
}

export enum PicsJsonFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pictures = 'pictures',
  pictures___background = 'pictures___background',
  pictures___children = 'pictures___children',
  pictures___children___children = 'pictures___children___children',
  pictures___children___children___children = 'pictures___children___children___children',
  pictures___children___children___id = 'pictures___children___children___id',
  pictures___children___id = 'pictures___children___id',
  pictures___children___internal___content = 'pictures___children___internal___content',
  pictures___children___internal___contentDigest = 'pictures___children___internal___contentDigest',
  pictures___children___internal___description = 'pictures___children___internal___description',
  pictures___children___internal___fieldOwners = 'pictures___children___internal___fieldOwners',
  pictures___children___internal___ignoreType = 'pictures___children___internal___ignoreType',
  pictures___children___internal___mediaType = 'pictures___children___internal___mediaType',
  pictures___children___internal___owner = 'pictures___children___internal___owner',
  pictures___children___internal___type = 'pictures___children___internal___type',
  pictures___children___parent___children = 'pictures___children___parent___children',
  pictures___children___parent___id = 'pictures___children___parent___id',
  pictures___description = 'pictures___description',
  pictures___fields___slug = 'pictures___fields___slug',
  pictures___id = 'pictures___id',
  pictures___image___absolutePath = 'pictures___image___absolutePath',
  pictures___image___accessTime = 'pictures___image___accessTime',
  pictures___image___atime = 'pictures___image___atime',
  pictures___image___atimeMs = 'pictures___image___atimeMs',
  pictures___image___base = 'pictures___image___base',
  pictures___image___birthTime = 'pictures___image___birthTime',
  pictures___image___birthtime = 'pictures___image___birthtime',
  pictures___image___birthtimeMs = 'pictures___image___birthtimeMs',
  pictures___image___blksize = 'pictures___image___blksize',
  pictures___image___blocks = 'pictures___image___blocks',
  pictures___image___changeTime = 'pictures___image___changeTime',
  pictures___image___childAboutJson___children = 'pictures___image___childAboutJson___children',
  pictures___image___childAboutJson___id = 'pictures___image___childAboutJson___id',
  pictures___image___childAboutJson___title = 'pictures___image___childAboutJson___title',
  pictures___image___childAlbumsJson___background = 'pictures___image___childAlbumsJson___background',
  pictures___image___childAlbumsJson___children = 'pictures___image___childAlbumsJson___children',
  pictures___image___childAlbumsJson___description = 'pictures___image___childAlbumsJson___description',
  pictures___image___childAlbumsJson___gatsbyPath = 'pictures___image___childAlbumsJson___gatsbyPath',
  pictures___image___childAlbumsJson___id = 'pictures___image___childAlbumsJson___id',
  pictures___image___childAlbumsJson___images = 'pictures___image___childAlbumsJson___images',
  pictures___image___childAlbumsJson___title = 'pictures___image___childAlbumsJson___title',
  pictures___image___childBackstageJson___children = 'pictures___image___childBackstageJson___children',
  pictures___image___childBackstageJson___id = 'pictures___image___childBackstageJson___id',
  pictures___image___childBackstageJson___title = 'pictures___image___childBackstageJson___title',
  pictures___image___childContactsJson___children = 'pictures___image___childContactsJson___children',
  pictures___image___childContactsJson___id = 'pictures___image___childContactsJson___id',
  pictures___image___childContactsJson___title = 'pictures___image___childContactsJson___title',
  pictures___image___childImageSharp___children = 'pictures___image___childImageSharp___children',
  pictures___image___childImageSharp___gatsbyImageData = 'pictures___image___childImageSharp___gatsbyImageData',
  pictures___image___childImageSharp___id = 'pictures___image___childImageSharp___id',
  pictures___image___childPicsJson___children = 'pictures___image___childPicsJson___children',
  pictures___image___childPicsJson___id = 'pictures___image___childPicsJson___id',
  pictures___image___childPicsJson___pictures = 'pictures___image___childPicsJson___pictures',
  pictures___image___childPicsJson___title = 'pictures___image___childPicsJson___title',
  pictures___image___childPicturesJson___background = 'pictures___image___childPicturesJson___background',
  pictures___image___childPicturesJson___children = 'pictures___image___childPicturesJson___children',
  pictures___image___childPicturesJson___description = 'pictures___image___childPicturesJson___description',
  pictures___image___childPicturesJson___id = 'pictures___image___childPicturesJson___id',
  pictures___image___childPicturesJson___title = 'pictures___image___childPicturesJson___title',
  pictures___image___childSeriesJson___albums = 'pictures___image___childSeriesJson___albums',
  pictures___image___childSeriesJson___children = 'pictures___image___childSeriesJson___children',
  pictures___image___childSeriesJson___id = 'pictures___image___childSeriesJson___id',
  pictures___image___childSeriesJson___title = 'pictures___image___childSeriesJson___title',
  pictures___image___children = 'pictures___image___children',
  pictures___image___childrenAboutJson = 'pictures___image___childrenAboutJson',
  pictures___image___childrenAboutJson___children = 'pictures___image___childrenAboutJson___children',
  pictures___image___childrenAboutJson___id = 'pictures___image___childrenAboutJson___id',
  pictures___image___childrenAboutJson___title = 'pictures___image___childrenAboutJson___title',
  pictures___image___childrenAlbumsJson = 'pictures___image___childrenAlbumsJson',
  pictures___image___childrenAlbumsJson___background = 'pictures___image___childrenAlbumsJson___background',
  pictures___image___childrenAlbumsJson___children = 'pictures___image___childrenAlbumsJson___children',
  pictures___image___childrenAlbumsJson___description = 'pictures___image___childrenAlbumsJson___description',
  pictures___image___childrenAlbumsJson___gatsbyPath = 'pictures___image___childrenAlbumsJson___gatsbyPath',
  pictures___image___childrenAlbumsJson___id = 'pictures___image___childrenAlbumsJson___id',
  pictures___image___childrenAlbumsJson___images = 'pictures___image___childrenAlbumsJson___images',
  pictures___image___childrenAlbumsJson___title = 'pictures___image___childrenAlbumsJson___title',
  pictures___image___childrenBackstageJson = 'pictures___image___childrenBackstageJson',
  pictures___image___childrenBackstageJson___children = 'pictures___image___childrenBackstageJson___children',
  pictures___image___childrenBackstageJson___id = 'pictures___image___childrenBackstageJson___id',
  pictures___image___childrenBackstageJson___title = 'pictures___image___childrenBackstageJson___title',
  pictures___image___childrenContactsJson = 'pictures___image___childrenContactsJson',
  pictures___image___childrenContactsJson___children = 'pictures___image___childrenContactsJson___children',
  pictures___image___childrenContactsJson___id = 'pictures___image___childrenContactsJson___id',
  pictures___image___childrenContactsJson___title = 'pictures___image___childrenContactsJson___title',
  pictures___image___childrenImageSharp = 'pictures___image___childrenImageSharp',
  pictures___image___childrenImageSharp___children = 'pictures___image___childrenImageSharp___children',
  pictures___image___childrenImageSharp___gatsbyImageData = 'pictures___image___childrenImageSharp___gatsbyImageData',
  pictures___image___childrenImageSharp___id = 'pictures___image___childrenImageSharp___id',
  pictures___image___childrenPicsJson = 'pictures___image___childrenPicsJson',
  pictures___image___childrenPicsJson___children = 'pictures___image___childrenPicsJson___children',
  pictures___image___childrenPicsJson___id = 'pictures___image___childrenPicsJson___id',
  pictures___image___childrenPicsJson___pictures = 'pictures___image___childrenPicsJson___pictures',
  pictures___image___childrenPicsJson___title = 'pictures___image___childrenPicsJson___title',
  pictures___image___childrenPicturesJson = 'pictures___image___childrenPicturesJson',
  pictures___image___childrenPicturesJson___background = 'pictures___image___childrenPicturesJson___background',
  pictures___image___childrenPicturesJson___children = 'pictures___image___childrenPicturesJson___children',
  pictures___image___childrenPicturesJson___description = 'pictures___image___childrenPicturesJson___description',
  pictures___image___childrenPicturesJson___id = 'pictures___image___childrenPicturesJson___id',
  pictures___image___childrenPicturesJson___title = 'pictures___image___childrenPicturesJson___title',
  pictures___image___childrenSeriesJson = 'pictures___image___childrenSeriesJson',
  pictures___image___childrenSeriesJson___albums = 'pictures___image___childrenSeriesJson___albums',
  pictures___image___childrenSeriesJson___children = 'pictures___image___childrenSeriesJson___children',
  pictures___image___childrenSeriesJson___id = 'pictures___image___childrenSeriesJson___id',
  pictures___image___childrenSeriesJson___title = 'pictures___image___childrenSeriesJson___title',
  pictures___image___children___children = 'pictures___image___children___children',
  pictures___image___children___id = 'pictures___image___children___id',
  pictures___image___ctime = 'pictures___image___ctime',
  pictures___image___ctimeMs = 'pictures___image___ctimeMs',
  pictures___image___dev = 'pictures___image___dev',
  pictures___image___dir = 'pictures___image___dir',
  pictures___image___ext = 'pictures___image___ext',
  pictures___image___extension = 'pictures___image___extension',
  pictures___image___gid = 'pictures___image___gid',
  pictures___image___id = 'pictures___image___id',
  pictures___image___ino = 'pictures___image___ino',
  pictures___image___internal___content = 'pictures___image___internal___content',
  pictures___image___internal___contentDigest = 'pictures___image___internal___contentDigest',
  pictures___image___internal___description = 'pictures___image___internal___description',
  pictures___image___internal___fieldOwners = 'pictures___image___internal___fieldOwners',
  pictures___image___internal___ignoreType = 'pictures___image___internal___ignoreType',
  pictures___image___internal___mediaType = 'pictures___image___internal___mediaType',
  pictures___image___internal___owner = 'pictures___image___internal___owner',
  pictures___image___internal___type = 'pictures___image___internal___type',
  pictures___image___mode = 'pictures___image___mode',
  pictures___image___modifiedTime = 'pictures___image___modifiedTime',
  pictures___image___mtime = 'pictures___image___mtime',
  pictures___image___mtimeMs = 'pictures___image___mtimeMs',
  pictures___image___name = 'pictures___image___name',
  pictures___image___nlink = 'pictures___image___nlink',
  pictures___image___parent___children = 'pictures___image___parent___children',
  pictures___image___parent___id = 'pictures___image___parent___id',
  pictures___image___prettySize = 'pictures___image___prettySize',
  pictures___image___publicURL = 'pictures___image___publicURL',
  pictures___image___rdev = 'pictures___image___rdev',
  pictures___image___relativeDirectory = 'pictures___image___relativeDirectory',
  pictures___image___relativePath = 'pictures___image___relativePath',
  pictures___image___root = 'pictures___image___root',
  pictures___image___size = 'pictures___image___size',
  pictures___image___sourceInstanceName = 'pictures___image___sourceInstanceName',
  pictures___image___uid = 'pictures___image___uid',
  pictures___internal___content = 'pictures___internal___content',
  pictures___internal___contentDigest = 'pictures___internal___contentDigest',
  pictures___internal___description = 'pictures___internal___description',
  pictures___internal___fieldOwners = 'pictures___internal___fieldOwners',
  pictures___internal___ignoreType = 'pictures___internal___ignoreType',
  pictures___internal___mediaType = 'pictures___internal___mediaType',
  pictures___internal___owner = 'pictures___internal___owner',
  pictures___internal___type = 'pictures___internal___type',
  pictures___parent___children = 'pictures___parent___children',
  pictures___parent___children___children = 'pictures___parent___children___children',
  pictures___parent___children___id = 'pictures___parent___children___id',
  pictures___parent___id = 'pictures___parent___id',
  pictures___parent___internal___content = 'pictures___parent___internal___content',
  pictures___parent___internal___contentDigest = 'pictures___parent___internal___contentDigest',
  pictures___parent___internal___description = 'pictures___parent___internal___description',
  pictures___parent___internal___fieldOwners = 'pictures___parent___internal___fieldOwners',
  pictures___parent___internal___ignoreType = 'pictures___parent___internal___ignoreType',
  pictures___parent___internal___mediaType = 'pictures___parent___internal___mediaType',
  pictures___parent___internal___owner = 'pictures___parent___internal___owner',
  pictures___parent___internal___type = 'pictures___parent___internal___type',
  pictures___parent___parent___children = 'pictures___parent___parent___children',
  pictures___parent___parent___id = 'pictures___parent___parent___id',
  pictures___title = 'pictures___title',
  title = 'title'
}

export interface PicsJsonFilterInput {
  readonly children: Maybe<NodeFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly pictures: Maybe<PicturesJsonFilterListInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface PicsJsonFilterListInput {
  readonly elemMatch: Maybe<PicsJsonFilterInput>;
}

export interface PicsJsonGroupConnection {
  readonly __typename?: 'PicsJsonGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PicsJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PicsJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PicsJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface PicsJsonGroupConnectionDistinctArgs {
  field: PicsJsonFieldsEnum;
}


export interface PicsJsonGroupConnectionGroupArgs {
  field: PicsJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface PicsJsonGroupConnectionMaxArgs {
  field: PicsJsonFieldsEnum;
}


export interface PicsJsonGroupConnectionMinArgs {
  field: PicsJsonFieldsEnum;
}


export interface PicsJsonGroupConnectionSumArgs {
  field: PicsJsonFieldsEnum;
}

export interface PicsJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<PicsJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface PicturesJson extends Node {
  readonly __typename?: 'PicturesJson';
  readonly background: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly fields: Maybe<PicturesJsonFields>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<File>;
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
}

export interface PicturesJsonConnection {
  readonly __typename?: 'PicturesJsonConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PicturesJsonEdge>;
  readonly group: ReadonlyArray<PicturesJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PicturesJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface PicturesJsonConnectionDistinctArgs {
  field: PicturesJsonFieldsEnum;
}


export interface PicturesJsonConnectionGroupArgs {
  field: PicturesJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface PicturesJsonConnectionMaxArgs {
  field: PicturesJsonFieldsEnum;
}


export interface PicturesJsonConnectionMinArgs {
  field: PicturesJsonFieldsEnum;
}


export interface PicturesJsonConnectionSumArgs {
  field: PicturesJsonFieldsEnum;
}

export interface PicturesJsonEdge {
  readonly __typename?: 'PicturesJsonEdge';
  readonly next: Maybe<PicturesJson>;
  readonly node: PicturesJson;
  readonly previous: Maybe<PicturesJson>;
}

export interface PicturesJsonFields {
  readonly __typename?: 'PicturesJsonFields';
  readonly slug: Maybe<Scalars['String']>;
}

export enum PicturesJsonFieldsEnum {
  background = 'background',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  fields___slug = 'fields___slug',
  id = 'id',
  image___absolutePath = 'image___absolutePath',
  image___accessTime = 'image___accessTime',
  image___atime = 'image___atime',
  image___atimeMs = 'image___atimeMs',
  image___base = 'image___base',
  image___birthTime = 'image___birthTime',
  image___birthtime = 'image___birthtime',
  image___birthtimeMs = 'image___birthtimeMs',
  image___blksize = 'image___blksize',
  image___blocks = 'image___blocks',
  image___changeTime = 'image___changeTime',
  image___childAboutJson___children = 'image___childAboutJson___children',
  image___childAboutJson___children___children = 'image___childAboutJson___children___children',
  image___childAboutJson___children___id = 'image___childAboutJson___children___id',
  image___childAboutJson___id = 'image___childAboutJson___id',
  image___childAboutJson___internal___content = 'image___childAboutJson___internal___content',
  image___childAboutJson___internal___contentDigest = 'image___childAboutJson___internal___contentDigest',
  image___childAboutJson___internal___description = 'image___childAboutJson___internal___description',
  image___childAboutJson___internal___fieldOwners = 'image___childAboutJson___internal___fieldOwners',
  image___childAboutJson___internal___ignoreType = 'image___childAboutJson___internal___ignoreType',
  image___childAboutJson___internal___mediaType = 'image___childAboutJson___internal___mediaType',
  image___childAboutJson___internal___owner = 'image___childAboutJson___internal___owner',
  image___childAboutJson___internal___type = 'image___childAboutJson___internal___type',
  image___childAboutJson___parent___children = 'image___childAboutJson___parent___children',
  image___childAboutJson___parent___id = 'image___childAboutJson___parent___id',
  image___childAboutJson___title = 'image___childAboutJson___title',
  image___childAlbumsJson___background = 'image___childAlbumsJson___background',
  image___childAlbumsJson___children = 'image___childAlbumsJson___children',
  image___childAlbumsJson___children___children = 'image___childAlbumsJson___children___children',
  image___childAlbumsJson___children___id = 'image___childAlbumsJson___children___id',
  image___childAlbumsJson___description = 'image___childAlbumsJson___description',
  image___childAlbumsJson___fields___slug = 'image___childAlbumsJson___fields___slug',
  image___childAlbumsJson___gatsbyPath = 'image___childAlbumsJson___gatsbyPath',
  image___childAlbumsJson___id = 'image___childAlbumsJson___id',
  image___childAlbumsJson___images = 'image___childAlbumsJson___images',
  image___childAlbumsJson___images___cover = 'image___childAlbumsJson___images___cover',
  image___childAlbumsJson___internal___content = 'image___childAlbumsJson___internal___content',
  image___childAlbumsJson___internal___contentDigest = 'image___childAlbumsJson___internal___contentDigest',
  image___childAlbumsJson___internal___description = 'image___childAlbumsJson___internal___description',
  image___childAlbumsJson___internal___fieldOwners = 'image___childAlbumsJson___internal___fieldOwners',
  image___childAlbumsJson___internal___ignoreType = 'image___childAlbumsJson___internal___ignoreType',
  image___childAlbumsJson___internal___mediaType = 'image___childAlbumsJson___internal___mediaType',
  image___childAlbumsJson___internal___owner = 'image___childAlbumsJson___internal___owner',
  image___childAlbumsJson___internal___type = 'image___childAlbumsJson___internal___type',
  image___childAlbumsJson___parent___children = 'image___childAlbumsJson___parent___children',
  image___childAlbumsJson___parent___id = 'image___childAlbumsJson___parent___id',
  image___childAlbumsJson___title = 'image___childAlbumsJson___title',
  image___childBackstageJson___children = 'image___childBackstageJson___children',
  image___childBackstageJson___children___children = 'image___childBackstageJson___children___children',
  image___childBackstageJson___children___id = 'image___childBackstageJson___children___id',
  image___childBackstageJson___id = 'image___childBackstageJson___id',
  image___childBackstageJson___internal___content = 'image___childBackstageJson___internal___content',
  image___childBackstageJson___internal___contentDigest = 'image___childBackstageJson___internal___contentDigest',
  image___childBackstageJson___internal___description = 'image___childBackstageJson___internal___description',
  image___childBackstageJson___internal___fieldOwners = 'image___childBackstageJson___internal___fieldOwners',
  image___childBackstageJson___internal___ignoreType = 'image___childBackstageJson___internal___ignoreType',
  image___childBackstageJson___internal___mediaType = 'image___childBackstageJson___internal___mediaType',
  image___childBackstageJson___internal___owner = 'image___childBackstageJson___internal___owner',
  image___childBackstageJson___internal___type = 'image___childBackstageJson___internal___type',
  image___childBackstageJson___parent___children = 'image___childBackstageJson___parent___children',
  image___childBackstageJson___parent___id = 'image___childBackstageJson___parent___id',
  image___childBackstageJson___title = 'image___childBackstageJson___title',
  image___childContactsJson___children = 'image___childContactsJson___children',
  image___childContactsJson___children___children = 'image___childContactsJson___children___children',
  image___childContactsJson___children___id = 'image___childContactsJson___children___id',
  image___childContactsJson___id = 'image___childContactsJson___id',
  image___childContactsJson___internal___content = 'image___childContactsJson___internal___content',
  image___childContactsJson___internal___contentDigest = 'image___childContactsJson___internal___contentDigest',
  image___childContactsJson___internal___description = 'image___childContactsJson___internal___description',
  image___childContactsJson___internal___fieldOwners = 'image___childContactsJson___internal___fieldOwners',
  image___childContactsJson___internal___ignoreType = 'image___childContactsJson___internal___ignoreType',
  image___childContactsJson___internal___mediaType = 'image___childContactsJson___internal___mediaType',
  image___childContactsJson___internal___owner = 'image___childContactsJson___internal___owner',
  image___childContactsJson___internal___type = 'image___childContactsJson___internal___type',
  image___childContactsJson___parent___children = 'image___childContactsJson___parent___children',
  image___childContactsJson___parent___id = 'image___childContactsJson___parent___id',
  image___childContactsJson___title = 'image___childContactsJson___title',
  image___childImageSharp___children = 'image___childImageSharp___children',
  image___childImageSharp___children___children = 'image___childImageSharp___children___children',
  image___childImageSharp___children___id = 'image___childImageSharp___children___id',
  image___childImageSharp___fixed___aspectRatio = 'image___childImageSharp___fixed___aspectRatio',
  image___childImageSharp___fixed___base64 = 'image___childImageSharp___fixed___base64',
  image___childImageSharp___fixed___height = 'image___childImageSharp___fixed___height',
  image___childImageSharp___fixed___originalName = 'image___childImageSharp___fixed___originalName',
  image___childImageSharp___fixed___src = 'image___childImageSharp___fixed___src',
  image___childImageSharp___fixed___srcSet = 'image___childImageSharp___fixed___srcSet',
  image___childImageSharp___fixed___srcSetWebp = 'image___childImageSharp___fixed___srcSetWebp',
  image___childImageSharp___fixed___srcWebp = 'image___childImageSharp___fixed___srcWebp',
  image___childImageSharp___fixed___tracedSVG = 'image___childImageSharp___fixed___tracedSVG',
  image___childImageSharp___fixed___width = 'image___childImageSharp___fixed___width',
  image___childImageSharp___fluid___aspectRatio = 'image___childImageSharp___fluid___aspectRatio',
  image___childImageSharp___fluid___base64 = 'image___childImageSharp___fluid___base64',
  image___childImageSharp___fluid___originalImg = 'image___childImageSharp___fluid___originalImg',
  image___childImageSharp___fluid___originalName = 'image___childImageSharp___fluid___originalName',
  image___childImageSharp___fluid___presentationHeight = 'image___childImageSharp___fluid___presentationHeight',
  image___childImageSharp___fluid___presentationWidth = 'image___childImageSharp___fluid___presentationWidth',
  image___childImageSharp___fluid___sizes = 'image___childImageSharp___fluid___sizes',
  image___childImageSharp___fluid___src = 'image___childImageSharp___fluid___src',
  image___childImageSharp___fluid___srcSet = 'image___childImageSharp___fluid___srcSet',
  image___childImageSharp___fluid___srcSetWebp = 'image___childImageSharp___fluid___srcSetWebp',
  image___childImageSharp___fluid___srcWebp = 'image___childImageSharp___fluid___srcWebp',
  image___childImageSharp___fluid___tracedSVG = 'image___childImageSharp___fluid___tracedSVG',
  image___childImageSharp___gatsbyImageData = 'image___childImageSharp___gatsbyImageData',
  image___childImageSharp___id = 'image___childImageSharp___id',
  image___childImageSharp___internal___content = 'image___childImageSharp___internal___content',
  image___childImageSharp___internal___contentDigest = 'image___childImageSharp___internal___contentDigest',
  image___childImageSharp___internal___description = 'image___childImageSharp___internal___description',
  image___childImageSharp___internal___fieldOwners = 'image___childImageSharp___internal___fieldOwners',
  image___childImageSharp___internal___ignoreType = 'image___childImageSharp___internal___ignoreType',
  image___childImageSharp___internal___mediaType = 'image___childImageSharp___internal___mediaType',
  image___childImageSharp___internal___owner = 'image___childImageSharp___internal___owner',
  image___childImageSharp___internal___type = 'image___childImageSharp___internal___type',
  image___childImageSharp___original___height = 'image___childImageSharp___original___height',
  image___childImageSharp___original___src = 'image___childImageSharp___original___src',
  image___childImageSharp___original___width = 'image___childImageSharp___original___width',
  image___childImageSharp___parent___children = 'image___childImageSharp___parent___children',
  image___childImageSharp___parent___id = 'image___childImageSharp___parent___id',
  image___childImageSharp___resize___aspectRatio = 'image___childImageSharp___resize___aspectRatio',
  image___childImageSharp___resize___height = 'image___childImageSharp___resize___height',
  image___childImageSharp___resize___originalName = 'image___childImageSharp___resize___originalName',
  image___childImageSharp___resize___src = 'image___childImageSharp___resize___src',
  image___childImageSharp___resize___tracedSVG = 'image___childImageSharp___resize___tracedSVG',
  image___childImageSharp___resize___width = 'image___childImageSharp___resize___width',
  image___childPicsJson___children = 'image___childPicsJson___children',
  image___childPicsJson___children___children = 'image___childPicsJson___children___children',
  image___childPicsJson___children___id = 'image___childPicsJson___children___id',
  image___childPicsJson___id = 'image___childPicsJson___id',
  image___childPicsJson___internal___content = 'image___childPicsJson___internal___content',
  image___childPicsJson___internal___contentDigest = 'image___childPicsJson___internal___contentDigest',
  image___childPicsJson___internal___description = 'image___childPicsJson___internal___description',
  image___childPicsJson___internal___fieldOwners = 'image___childPicsJson___internal___fieldOwners',
  image___childPicsJson___internal___ignoreType = 'image___childPicsJson___internal___ignoreType',
  image___childPicsJson___internal___mediaType = 'image___childPicsJson___internal___mediaType',
  image___childPicsJson___internal___owner = 'image___childPicsJson___internal___owner',
  image___childPicsJson___internal___type = 'image___childPicsJson___internal___type',
  image___childPicsJson___parent___children = 'image___childPicsJson___parent___children',
  image___childPicsJson___parent___id = 'image___childPicsJson___parent___id',
  image___childPicsJson___pictures = 'image___childPicsJson___pictures',
  image___childPicsJson___pictures___background = 'image___childPicsJson___pictures___background',
  image___childPicsJson___pictures___children = 'image___childPicsJson___pictures___children',
  image___childPicsJson___pictures___description = 'image___childPicsJson___pictures___description',
  image___childPicsJson___pictures___id = 'image___childPicsJson___pictures___id',
  image___childPicsJson___pictures___title = 'image___childPicsJson___pictures___title',
  image___childPicsJson___title = 'image___childPicsJson___title',
  image___childPicturesJson___background = 'image___childPicturesJson___background',
  image___childPicturesJson___children = 'image___childPicturesJson___children',
  image___childPicturesJson___children___children = 'image___childPicturesJson___children___children',
  image___childPicturesJson___children___id = 'image___childPicturesJson___children___id',
  image___childPicturesJson___description = 'image___childPicturesJson___description',
  image___childPicturesJson___fields___slug = 'image___childPicturesJson___fields___slug',
  image___childPicturesJson___id = 'image___childPicturesJson___id',
  image___childPicturesJson___image___absolutePath = 'image___childPicturesJson___image___absolutePath',
  image___childPicturesJson___image___accessTime = 'image___childPicturesJson___image___accessTime',
  image___childPicturesJson___image___atime = 'image___childPicturesJson___image___atime',
  image___childPicturesJson___image___atimeMs = 'image___childPicturesJson___image___atimeMs',
  image___childPicturesJson___image___base = 'image___childPicturesJson___image___base',
  image___childPicturesJson___image___birthTime = 'image___childPicturesJson___image___birthTime',
  image___childPicturesJson___image___birthtime = 'image___childPicturesJson___image___birthtime',
  image___childPicturesJson___image___birthtimeMs = 'image___childPicturesJson___image___birthtimeMs',
  image___childPicturesJson___image___blksize = 'image___childPicturesJson___image___blksize',
  image___childPicturesJson___image___blocks = 'image___childPicturesJson___image___blocks',
  image___childPicturesJson___image___changeTime = 'image___childPicturesJson___image___changeTime',
  image___childPicturesJson___image___children = 'image___childPicturesJson___image___children',
  image___childPicturesJson___image___childrenAboutJson = 'image___childPicturesJson___image___childrenAboutJson',
  image___childPicturesJson___image___childrenAlbumsJson = 'image___childPicturesJson___image___childrenAlbumsJson',
  image___childPicturesJson___image___childrenBackstageJson = 'image___childPicturesJson___image___childrenBackstageJson',
  image___childPicturesJson___image___childrenContactsJson = 'image___childPicturesJson___image___childrenContactsJson',
  image___childPicturesJson___image___childrenImageSharp = 'image___childPicturesJson___image___childrenImageSharp',
  image___childPicturesJson___image___childrenPicsJson = 'image___childPicturesJson___image___childrenPicsJson',
  image___childPicturesJson___image___childrenPicturesJson = 'image___childPicturesJson___image___childrenPicturesJson',
  image___childPicturesJson___image___childrenSeriesJson = 'image___childPicturesJson___image___childrenSeriesJson',
  image___childPicturesJson___image___ctime = 'image___childPicturesJson___image___ctime',
  image___childPicturesJson___image___ctimeMs = 'image___childPicturesJson___image___ctimeMs',
  image___childPicturesJson___image___dev = 'image___childPicturesJson___image___dev',
  image___childPicturesJson___image___dir = 'image___childPicturesJson___image___dir',
  image___childPicturesJson___image___ext = 'image___childPicturesJson___image___ext',
  image___childPicturesJson___image___extension = 'image___childPicturesJson___image___extension',
  image___childPicturesJson___image___gid = 'image___childPicturesJson___image___gid',
  image___childPicturesJson___image___id = 'image___childPicturesJson___image___id',
  image___childPicturesJson___image___ino = 'image___childPicturesJson___image___ino',
  image___childPicturesJson___image___mode = 'image___childPicturesJson___image___mode',
  image___childPicturesJson___image___modifiedTime = 'image___childPicturesJson___image___modifiedTime',
  image___childPicturesJson___image___mtime = 'image___childPicturesJson___image___mtime',
  image___childPicturesJson___image___mtimeMs = 'image___childPicturesJson___image___mtimeMs',
  image___childPicturesJson___image___name = 'image___childPicturesJson___image___name',
  image___childPicturesJson___image___nlink = 'image___childPicturesJson___image___nlink',
  image___childPicturesJson___image___prettySize = 'image___childPicturesJson___image___prettySize',
  image___childPicturesJson___image___publicURL = 'image___childPicturesJson___image___publicURL',
  image___childPicturesJson___image___rdev = 'image___childPicturesJson___image___rdev',
  image___childPicturesJson___image___relativeDirectory = 'image___childPicturesJson___image___relativeDirectory',
  image___childPicturesJson___image___relativePath = 'image___childPicturesJson___image___relativePath',
  image___childPicturesJson___image___root = 'image___childPicturesJson___image___root',
  image___childPicturesJson___image___size = 'image___childPicturesJson___image___size',
  image___childPicturesJson___image___sourceInstanceName = 'image___childPicturesJson___image___sourceInstanceName',
  image___childPicturesJson___image___uid = 'image___childPicturesJson___image___uid',
  image___childPicturesJson___internal___content = 'image___childPicturesJson___internal___content',
  image___childPicturesJson___internal___contentDigest = 'image___childPicturesJson___internal___contentDigest',
  image___childPicturesJson___internal___description = 'image___childPicturesJson___internal___description',
  image___childPicturesJson___internal___fieldOwners = 'image___childPicturesJson___internal___fieldOwners',
  image___childPicturesJson___internal___ignoreType = 'image___childPicturesJson___internal___ignoreType',
  image___childPicturesJson___internal___mediaType = 'image___childPicturesJson___internal___mediaType',
  image___childPicturesJson___internal___owner = 'image___childPicturesJson___internal___owner',
  image___childPicturesJson___internal___type = 'image___childPicturesJson___internal___type',
  image___childPicturesJson___parent___children = 'image___childPicturesJson___parent___children',
  image___childPicturesJson___parent___id = 'image___childPicturesJson___parent___id',
  image___childPicturesJson___title = 'image___childPicturesJson___title',
  image___childSeriesJson___albums = 'image___childSeriesJson___albums',
  image___childSeriesJson___albums___background = 'image___childSeriesJson___albums___background',
  image___childSeriesJson___albums___children = 'image___childSeriesJson___albums___children',
  image___childSeriesJson___albums___description = 'image___childSeriesJson___albums___description',
  image___childSeriesJson___albums___gatsbyPath = 'image___childSeriesJson___albums___gatsbyPath',
  image___childSeriesJson___albums___id = 'image___childSeriesJson___albums___id',
  image___childSeriesJson___albums___images = 'image___childSeriesJson___albums___images',
  image___childSeriesJson___albums___title = 'image___childSeriesJson___albums___title',
  image___childSeriesJson___children = 'image___childSeriesJson___children',
  image___childSeriesJson___children___children = 'image___childSeriesJson___children___children',
  image___childSeriesJson___children___id = 'image___childSeriesJson___children___id',
  image___childSeriesJson___id = 'image___childSeriesJson___id',
  image___childSeriesJson___internal___content = 'image___childSeriesJson___internal___content',
  image___childSeriesJson___internal___contentDigest = 'image___childSeriesJson___internal___contentDigest',
  image___childSeriesJson___internal___description = 'image___childSeriesJson___internal___description',
  image___childSeriesJson___internal___fieldOwners = 'image___childSeriesJson___internal___fieldOwners',
  image___childSeriesJson___internal___ignoreType = 'image___childSeriesJson___internal___ignoreType',
  image___childSeriesJson___internal___mediaType = 'image___childSeriesJson___internal___mediaType',
  image___childSeriesJson___internal___owner = 'image___childSeriesJson___internal___owner',
  image___childSeriesJson___internal___type = 'image___childSeriesJson___internal___type',
  image___childSeriesJson___parent___children = 'image___childSeriesJson___parent___children',
  image___childSeriesJson___parent___id = 'image___childSeriesJson___parent___id',
  image___childSeriesJson___title = 'image___childSeriesJson___title',
  image___children = 'image___children',
  image___childrenAboutJson = 'image___childrenAboutJson',
  image___childrenAboutJson___children = 'image___childrenAboutJson___children',
  image___childrenAboutJson___children___children = 'image___childrenAboutJson___children___children',
  image___childrenAboutJson___children___id = 'image___childrenAboutJson___children___id',
  image___childrenAboutJson___id = 'image___childrenAboutJson___id',
  image___childrenAboutJson___internal___content = 'image___childrenAboutJson___internal___content',
  image___childrenAboutJson___internal___contentDigest = 'image___childrenAboutJson___internal___contentDigest',
  image___childrenAboutJson___internal___description = 'image___childrenAboutJson___internal___description',
  image___childrenAboutJson___internal___fieldOwners = 'image___childrenAboutJson___internal___fieldOwners',
  image___childrenAboutJson___internal___ignoreType = 'image___childrenAboutJson___internal___ignoreType',
  image___childrenAboutJson___internal___mediaType = 'image___childrenAboutJson___internal___mediaType',
  image___childrenAboutJson___internal___owner = 'image___childrenAboutJson___internal___owner',
  image___childrenAboutJson___internal___type = 'image___childrenAboutJson___internal___type',
  image___childrenAboutJson___parent___children = 'image___childrenAboutJson___parent___children',
  image___childrenAboutJson___parent___id = 'image___childrenAboutJson___parent___id',
  image___childrenAboutJson___title = 'image___childrenAboutJson___title',
  image___childrenAlbumsJson = 'image___childrenAlbumsJson',
  image___childrenAlbumsJson___background = 'image___childrenAlbumsJson___background',
  image___childrenAlbumsJson___children = 'image___childrenAlbumsJson___children',
  image___childrenAlbumsJson___children___children = 'image___childrenAlbumsJson___children___children',
  image___childrenAlbumsJson___children___id = 'image___childrenAlbumsJson___children___id',
  image___childrenAlbumsJson___description = 'image___childrenAlbumsJson___description',
  image___childrenAlbumsJson___fields___slug = 'image___childrenAlbumsJson___fields___slug',
  image___childrenAlbumsJson___gatsbyPath = 'image___childrenAlbumsJson___gatsbyPath',
  image___childrenAlbumsJson___id = 'image___childrenAlbumsJson___id',
  image___childrenAlbumsJson___images = 'image___childrenAlbumsJson___images',
  image___childrenAlbumsJson___images___cover = 'image___childrenAlbumsJson___images___cover',
  image___childrenAlbumsJson___internal___content = 'image___childrenAlbumsJson___internal___content',
  image___childrenAlbumsJson___internal___contentDigest = 'image___childrenAlbumsJson___internal___contentDigest',
  image___childrenAlbumsJson___internal___description = 'image___childrenAlbumsJson___internal___description',
  image___childrenAlbumsJson___internal___fieldOwners = 'image___childrenAlbumsJson___internal___fieldOwners',
  image___childrenAlbumsJson___internal___ignoreType = 'image___childrenAlbumsJson___internal___ignoreType',
  image___childrenAlbumsJson___internal___mediaType = 'image___childrenAlbumsJson___internal___mediaType',
  image___childrenAlbumsJson___internal___owner = 'image___childrenAlbumsJson___internal___owner',
  image___childrenAlbumsJson___internal___type = 'image___childrenAlbumsJson___internal___type',
  image___childrenAlbumsJson___parent___children = 'image___childrenAlbumsJson___parent___children',
  image___childrenAlbumsJson___parent___id = 'image___childrenAlbumsJson___parent___id',
  image___childrenAlbumsJson___title = 'image___childrenAlbumsJson___title',
  image___childrenBackstageJson = 'image___childrenBackstageJson',
  image___childrenBackstageJson___children = 'image___childrenBackstageJson___children',
  image___childrenBackstageJson___children___children = 'image___childrenBackstageJson___children___children',
  image___childrenBackstageJson___children___id = 'image___childrenBackstageJson___children___id',
  image___childrenBackstageJson___id = 'image___childrenBackstageJson___id',
  image___childrenBackstageJson___internal___content = 'image___childrenBackstageJson___internal___content',
  image___childrenBackstageJson___internal___contentDigest = 'image___childrenBackstageJson___internal___contentDigest',
  image___childrenBackstageJson___internal___description = 'image___childrenBackstageJson___internal___description',
  image___childrenBackstageJson___internal___fieldOwners = 'image___childrenBackstageJson___internal___fieldOwners',
  image___childrenBackstageJson___internal___ignoreType = 'image___childrenBackstageJson___internal___ignoreType',
  image___childrenBackstageJson___internal___mediaType = 'image___childrenBackstageJson___internal___mediaType',
  image___childrenBackstageJson___internal___owner = 'image___childrenBackstageJson___internal___owner',
  image___childrenBackstageJson___internal___type = 'image___childrenBackstageJson___internal___type',
  image___childrenBackstageJson___parent___children = 'image___childrenBackstageJson___parent___children',
  image___childrenBackstageJson___parent___id = 'image___childrenBackstageJson___parent___id',
  image___childrenBackstageJson___title = 'image___childrenBackstageJson___title',
  image___childrenContactsJson = 'image___childrenContactsJson',
  image___childrenContactsJson___children = 'image___childrenContactsJson___children',
  image___childrenContactsJson___children___children = 'image___childrenContactsJson___children___children',
  image___childrenContactsJson___children___id = 'image___childrenContactsJson___children___id',
  image___childrenContactsJson___id = 'image___childrenContactsJson___id',
  image___childrenContactsJson___internal___content = 'image___childrenContactsJson___internal___content',
  image___childrenContactsJson___internal___contentDigest = 'image___childrenContactsJson___internal___contentDigest',
  image___childrenContactsJson___internal___description = 'image___childrenContactsJson___internal___description',
  image___childrenContactsJson___internal___fieldOwners = 'image___childrenContactsJson___internal___fieldOwners',
  image___childrenContactsJson___internal___ignoreType = 'image___childrenContactsJson___internal___ignoreType',
  image___childrenContactsJson___internal___mediaType = 'image___childrenContactsJson___internal___mediaType',
  image___childrenContactsJson___internal___owner = 'image___childrenContactsJson___internal___owner',
  image___childrenContactsJson___internal___type = 'image___childrenContactsJson___internal___type',
  image___childrenContactsJson___parent___children = 'image___childrenContactsJson___parent___children',
  image___childrenContactsJson___parent___id = 'image___childrenContactsJson___parent___id',
  image___childrenContactsJson___title = 'image___childrenContactsJson___title',
  image___childrenImageSharp = 'image___childrenImageSharp',
  image___childrenImageSharp___children = 'image___childrenImageSharp___children',
  image___childrenImageSharp___children___children = 'image___childrenImageSharp___children___children',
  image___childrenImageSharp___children___id = 'image___childrenImageSharp___children___id',
  image___childrenImageSharp___fixed___aspectRatio = 'image___childrenImageSharp___fixed___aspectRatio',
  image___childrenImageSharp___fixed___base64 = 'image___childrenImageSharp___fixed___base64',
  image___childrenImageSharp___fixed___height = 'image___childrenImageSharp___fixed___height',
  image___childrenImageSharp___fixed___originalName = 'image___childrenImageSharp___fixed___originalName',
  image___childrenImageSharp___fixed___src = 'image___childrenImageSharp___fixed___src',
  image___childrenImageSharp___fixed___srcSet = 'image___childrenImageSharp___fixed___srcSet',
  image___childrenImageSharp___fixed___srcSetWebp = 'image___childrenImageSharp___fixed___srcSetWebp',
  image___childrenImageSharp___fixed___srcWebp = 'image___childrenImageSharp___fixed___srcWebp',
  image___childrenImageSharp___fixed___tracedSVG = 'image___childrenImageSharp___fixed___tracedSVG',
  image___childrenImageSharp___fixed___width = 'image___childrenImageSharp___fixed___width',
  image___childrenImageSharp___fluid___aspectRatio = 'image___childrenImageSharp___fluid___aspectRatio',
  image___childrenImageSharp___fluid___base64 = 'image___childrenImageSharp___fluid___base64',
  image___childrenImageSharp___fluid___originalImg = 'image___childrenImageSharp___fluid___originalImg',
  image___childrenImageSharp___fluid___originalName = 'image___childrenImageSharp___fluid___originalName',
  image___childrenImageSharp___fluid___presentationHeight = 'image___childrenImageSharp___fluid___presentationHeight',
  image___childrenImageSharp___fluid___presentationWidth = 'image___childrenImageSharp___fluid___presentationWidth',
  image___childrenImageSharp___fluid___sizes = 'image___childrenImageSharp___fluid___sizes',
  image___childrenImageSharp___fluid___src = 'image___childrenImageSharp___fluid___src',
  image___childrenImageSharp___fluid___srcSet = 'image___childrenImageSharp___fluid___srcSet',
  image___childrenImageSharp___fluid___srcSetWebp = 'image___childrenImageSharp___fluid___srcSetWebp',
  image___childrenImageSharp___fluid___srcWebp = 'image___childrenImageSharp___fluid___srcWebp',
  image___childrenImageSharp___fluid___tracedSVG = 'image___childrenImageSharp___fluid___tracedSVG',
  image___childrenImageSharp___gatsbyImageData = 'image___childrenImageSharp___gatsbyImageData',
  image___childrenImageSharp___id = 'image___childrenImageSharp___id',
  image___childrenImageSharp___internal___content = 'image___childrenImageSharp___internal___content',
  image___childrenImageSharp___internal___contentDigest = 'image___childrenImageSharp___internal___contentDigest',
  image___childrenImageSharp___internal___description = 'image___childrenImageSharp___internal___description',
  image___childrenImageSharp___internal___fieldOwners = 'image___childrenImageSharp___internal___fieldOwners',
  image___childrenImageSharp___internal___ignoreType = 'image___childrenImageSharp___internal___ignoreType',
  image___childrenImageSharp___internal___mediaType = 'image___childrenImageSharp___internal___mediaType',
  image___childrenImageSharp___internal___owner = 'image___childrenImageSharp___internal___owner',
  image___childrenImageSharp___internal___type = 'image___childrenImageSharp___internal___type',
  image___childrenImageSharp___original___height = 'image___childrenImageSharp___original___height',
  image___childrenImageSharp___original___src = 'image___childrenImageSharp___original___src',
  image___childrenImageSharp___original___width = 'image___childrenImageSharp___original___width',
  image___childrenImageSharp___parent___children = 'image___childrenImageSharp___parent___children',
  image___childrenImageSharp___parent___id = 'image___childrenImageSharp___parent___id',
  image___childrenImageSharp___resize___aspectRatio = 'image___childrenImageSharp___resize___aspectRatio',
  image___childrenImageSharp___resize___height = 'image___childrenImageSharp___resize___height',
  image___childrenImageSharp___resize___originalName = 'image___childrenImageSharp___resize___originalName',
  image___childrenImageSharp___resize___src = 'image___childrenImageSharp___resize___src',
  image___childrenImageSharp___resize___tracedSVG = 'image___childrenImageSharp___resize___tracedSVG',
  image___childrenImageSharp___resize___width = 'image___childrenImageSharp___resize___width',
  image___childrenPicsJson = 'image___childrenPicsJson',
  image___childrenPicsJson___children = 'image___childrenPicsJson___children',
  image___childrenPicsJson___children___children = 'image___childrenPicsJson___children___children',
  image___childrenPicsJson___children___id = 'image___childrenPicsJson___children___id',
  image___childrenPicsJson___id = 'image___childrenPicsJson___id',
  image___childrenPicsJson___internal___content = 'image___childrenPicsJson___internal___content',
  image___childrenPicsJson___internal___contentDigest = 'image___childrenPicsJson___internal___contentDigest',
  image___childrenPicsJson___internal___description = 'image___childrenPicsJson___internal___description',
  image___childrenPicsJson___internal___fieldOwners = 'image___childrenPicsJson___internal___fieldOwners',
  image___childrenPicsJson___internal___ignoreType = 'image___childrenPicsJson___internal___ignoreType',
  image___childrenPicsJson___internal___mediaType = 'image___childrenPicsJson___internal___mediaType',
  image___childrenPicsJson___internal___owner = 'image___childrenPicsJson___internal___owner',
  image___childrenPicsJson___internal___type = 'image___childrenPicsJson___internal___type',
  image___childrenPicsJson___parent___children = 'image___childrenPicsJson___parent___children',
  image___childrenPicsJson___parent___id = 'image___childrenPicsJson___parent___id',
  image___childrenPicsJson___pictures = 'image___childrenPicsJson___pictures',
  image___childrenPicsJson___pictures___background = 'image___childrenPicsJson___pictures___background',
  image___childrenPicsJson___pictures___children = 'image___childrenPicsJson___pictures___children',
  image___childrenPicsJson___pictures___description = 'image___childrenPicsJson___pictures___description',
  image___childrenPicsJson___pictures___id = 'image___childrenPicsJson___pictures___id',
  image___childrenPicsJson___pictures___title = 'image___childrenPicsJson___pictures___title',
  image___childrenPicsJson___title = 'image___childrenPicsJson___title',
  image___childrenPicturesJson = 'image___childrenPicturesJson',
  image___childrenPicturesJson___background = 'image___childrenPicturesJson___background',
  image___childrenPicturesJson___children = 'image___childrenPicturesJson___children',
  image___childrenPicturesJson___children___children = 'image___childrenPicturesJson___children___children',
  image___childrenPicturesJson___children___id = 'image___childrenPicturesJson___children___id',
  image___childrenPicturesJson___description = 'image___childrenPicturesJson___description',
  image___childrenPicturesJson___fields___slug = 'image___childrenPicturesJson___fields___slug',
  image___childrenPicturesJson___id = 'image___childrenPicturesJson___id',
  image___childrenPicturesJson___image___absolutePath = 'image___childrenPicturesJson___image___absolutePath',
  image___childrenPicturesJson___image___accessTime = 'image___childrenPicturesJson___image___accessTime',
  image___childrenPicturesJson___image___atime = 'image___childrenPicturesJson___image___atime',
  image___childrenPicturesJson___image___atimeMs = 'image___childrenPicturesJson___image___atimeMs',
  image___childrenPicturesJson___image___base = 'image___childrenPicturesJson___image___base',
  image___childrenPicturesJson___image___birthTime = 'image___childrenPicturesJson___image___birthTime',
  image___childrenPicturesJson___image___birthtime = 'image___childrenPicturesJson___image___birthtime',
  image___childrenPicturesJson___image___birthtimeMs = 'image___childrenPicturesJson___image___birthtimeMs',
  image___childrenPicturesJson___image___blksize = 'image___childrenPicturesJson___image___blksize',
  image___childrenPicturesJson___image___blocks = 'image___childrenPicturesJson___image___blocks',
  image___childrenPicturesJson___image___changeTime = 'image___childrenPicturesJson___image___changeTime',
  image___childrenPicturesJson___image___children = 'image___childrenPicturesJson___image___children',
  image___childrenPicturesJson___image___childrenAboutJson = 'image___childrenPicturesJson___image___childrenAboutJson',
  image___childrenPicturesJson___image___childrenAlbumsJson = 'image___childrenPicturesJson___image___childrenAlbumsJson',
  image___childrenPicturesJson___image___childrenBackstageJson = 'image___childrenPicturesJson___image___childrenBackstageJson',
  image___childrenPicturesJson___image___childrenContactsJson = 'image___childrenPicturesJson___image___childrenContactsJson',
  image___childrenPicturesJson___image___childrenImageSharp = 'image___childrenPicturesJson___image___childrenImageSharp',
  image___childrenPicturesJson___image___childrenPicsJson = 'image___childrenPicturesJson___image___childrenPicsJson',
  image___childrenPicturesJson___image___childrenPicturesJson = 'image___childrenPicturesJson___image___childrenPicturesJson',
  image___childrenPicturesJson___image___childrenSeriesJson = 'image___childrenPicturesJson___image___childrenSeriesJson',
  image___childrenPicturesJson___image___ctime = 'image___childrenPicturesJson___image___ctime',
  image___childrenPicturesJson___image___ctimeMs = 'image___childrenPicturesJson___image___ctimeMs',
  image___childrenPicturesJson___image___dev = 'image___childrenPicturesJson___image___dev',
  image___childrenPicturesJson___image___dir = 'image___childrenPicturesJson___image___dir',
  image___childrenPicturesJson___image___ext = 'image___childrenPicturesJson___image___ext',
  image___childrenPicturesJson___image___extension = 'image___childrenPicturesJson___image___extension',
  image___childrenPicturesJson___image___gid = 'image___childrenPicturesJson___image___gid',
  image___childrenPicturesJson___image___id = 'image___childrenPicturesJson___image___id',
  image___childrenPicturesJson___image___ino = 'image___childrenPicturesJson___image___ino',
  image___childrenPicturesJson___image___mode = 'image___childrenPicturesJson___image___mode',
  image___childrenPicturesJson___image___modifiedTime = 'image___childrenPicturesJson___image___modifiedTime',
  image___childrenPicturesJson___image___mtime = 'image___childrenPicturesJson___image___mtime',
  image___childrenPicturesJson___image___mtimeMs = 'image___childrenPicturesJson___image___mtimeMs',
  image___childrenPicturesJson___image___name = 'image___childrenPicturesJson___image___name',
  image___childrenPicturesJson___image___nlink = 'image___childrenPicturesJson___image___nlink',
  image___childrenPicturesJson___image___prettySize = 'image___childrenPicturesJson___image___prettySize',
  image___childrenPicturesJson___image___publicURL = 'image___childrenPicturesJson___image___publicURL',
  image___childrenPicturesJson___image___rdev = 'image___childrenPicturesJson___image___rdev',
  image___childrenPicturesJson___image___relativeDirectory = 'image___childrenPicturesJson___image___relativeDirectory',
  image___childrenPicturesJson___image___relativePath = 'image___childrenPicturesJson___image___relativePath',
  image___childrenPicturesJson___image___root = 'image___childrenPicturesJson___image___root',
  image___childrenPicturesJson___image___size = 'image___childrenPicturesJson___image___size',
  image___childrenPicturesJson___image___sourceInstanceName = 'image___childrenPicturesJson___image___sourceInstanceName',
  image___childrenPicturesJson___image___uid = 'image___childrenPicturesJson___image___uid',
  image___childrenPicturesJson___internal___content = 'image___childrenPicturesJson___internal___content',
  image___childrenPicturesJson___internal___contentDigest = 'image___childrenPicturesJson___internal___contentDigest',
  image___childrenPicturesJson___internal___description = 'image___childrenPicturesJson___internal___description',
  image___childrenPicturesJson___internal___fieldOwners = 'image___childrenPicturesJson___internal___fieldOwners',
  image___childrenPicturesJson___internal___ignoreType = 'image___childrenPicturesJson___internal___ignoreType',
  image___childrenPicturesJson___internal___mediaType = 'image___childrenPicturesJson___internal___mediaType',
  image___childrenPicturesJson___internal___owner = 'image___childrenPicturesJson___internal___owner',
  image___childrenPicturesJson___internal___type = 'image___childrenPicturesJson___internal___type',
  image___childrenPicturesJson___parent___children = 'image___childrenPicturesJson___parent___children',
  image___childrenPicturesJson___parent___id = 'image___childrenPicturesJson___parent___id',
  image___childrenPicturesJson___title = 'image___childrenPicturesJson___title',
  image___childrenSeriesJson = 'image___childrenSeriesJson',
  image___childrenSeriesJson___albums = 'image___childrenSeriesJson___albums',
  image___childrenSeriesJson___albums___background = 'image___childrenSeriesJson___albums___background',
  image___childrenSeriesJson___albums___children = 'image___childrenSeriesJson___albums___children',
  image___childrenSeriesJson___albums___description = 'image___childrenSeriesJson___albums___description',
  image___childrenSeriesJson___albums___gatsbyPath = 'image___childrenSeriesJson___albums___gatsbyPath',
  image___childrenSeriesJson___albums___id = 'image___childrenSeriesJson___albums___id',
  image___childrenSeriesJson___albums___images = 'image___childrenSeriesJson___albums___images',
  image___childrenSeriesJson___albums___title = 'image___childrenSeriesJson___albums___title',
  image___childrenSeriesJson___children = 'image___childrenSeriesJson___children',
  image___childrenSeriesJson___children___children = 'image___childrenSeriesJson___children___children',
  image___childrenSeriesJson___children___id = 'image___childrenSeriesJson___children___id',
  image___childrenSeriesJson___id = 'image___childrenSeriesJson___id',
  image___childrenSeriesJson___internal___content = 'image___childrenSeriesJson___internal___content',
  image___childrenSeriesJson___internal___contentDigest = 'image___childrenSeriesJson___internal___contentDigest',
  image___childrenSeriesJson___internal___description = 'image___childrenSeriesJson___internal___description',
  image___childrenSeriesJson___internal___fieldOwners = 'image___childrenSeriesJson___internal___fieldOwners',
  image___childrenSeriesJson___internal___ignoreType = 'image___childrenSeriesJson___internal___ignoreType',
  image___childrenSeriesJson___internal___mediaType = 'image___childrenSeriesJson___internal___mediaType',
  image___childrenSeriesJson___internal___owner = 'image___childrenSeriesJson___internal___owner',
  image___childrenSeriesJson___internal___type = 'image___childrenSeriesJson___internal___type',
  image___childrenSeriesJson___parent___children = 'image___childrenSeriesJson___parent___children',
  image___childrenSeriesJson___parent___id = 'image___childrenSeriesJson___parent___id',
  image___childrenSeriesJson___title = 'image___childrenSeriesJson___title',
  image___children___children = 'image___children___children',
  image___children___children___children = 'image___children___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___id = 'image___children___id',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___children___parent___children = 'image___children___parent___children',
  image___children___parent___id = 'image___children___parent___id',
  image___ctime = 'image___ctime',
  image___ctimeMs = 'image___ctimeMs',
  image___dev = 'image___dev',
  image___dir = 'image___dir',
  image___ext = 'image___ext',
  image___extension = 'image___extension',
  image___gid = 'image___gid',
  image___id = 'image___id',
  image___ino = 'image___ino',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  image___mode = 'image___mode',
  image___modifiedTime = 'image___modifiedTime',
  image___mtime = 'image___mtime',
  image___mtimeMs = 'image___mtimeMs',
  image___name = 'image___name',
  image___nlink = 'image___nlink',
  image___parent___children = 'image___parent___children',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___id = 'image___parent___id',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___parent___id = 'image___parent___parent___id',
  image___prettySize = 'image___prettySize',
  image___publicURL = 'image___publicURL',
  image___rdev = 'image___rdev',
  image___relativeDirectory = 'image___relativeDirectory',
  image___relativePath = 'image___relativePath',
  image___root = 'image___root',
  image___size = 'image___size',
  image___sourceInstanceName = 'image___sourceInstanceName',
  image___uid = 'image___uid',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export interface PicturesJsonFieldsFilterInput {
  readonly slug: Maybe<StringQueryOperatorInput>;
}

export interface PicturesJsonFilterInput {
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<PicturesJsonFieldsFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface PicturesJsonFilterListInput {
  readonly elemMatch: Maybe<PicturesJsonFilterInput>;
}

export interface PicturesJsonGroupConnection {
  readonly __typename?: 'PicturesJsonGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PicturesJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PicturesJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PicturesJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface PicturesJsonGroupConnectionDistinctArgs {
  field: PicturesJsonFieldsEnum;
}


export interface PicturesJsonGroupConnectionGroupArgs {
  field: PicturesJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface PicturesJsonGroupConnectionMaxArgs {
  field: PicturesJsonFieldsEnum;
}


export interface PicturesJsonGroupConnectionMinArgs {
  field: PicturesJsonFieldsEnum;
}


export interface PicturesJsonGroupConnectionSumArgs {
  field: PicturesJsonFieldsEnum;
}

export interface PicturesJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<PicturesJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface Potrace {
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly background: Maybe<Scalars['String']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE'
}

export interface Query {
  readonly __typename?: 'Query';
  readonly aboutJson: Maybe<AboutJson>;
  readonly albumsJson: Maybe<AlbumsJson>;
  readonly allAboutJson: AboutJsonConnection;
  readonly allAlbumsJson: AlbumsJsonConnection;
  readonly allBackstageJson: BackstageJsonConnection;
  readonly allContactsJson: ContactsJsonConnection;
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly allPicsJson: PicsJsonConnection;
  readonly allPicturesJson: PicturesJsonConnection;
  readonly allSeriesJson: SeriesJsonConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly backstageJson: Maybe<BackstageJson>;
  readonly contactsJson: Maybe<ContactsJson>;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly picsJson: Maybe<PicsJson>;
  readonly picturesJson: Maybe<PicturesJson>;
  readonly seriesJson: Maybe<SeriesJson>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
}


export interface QueryAboutJsonArgs {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QueryAlbumsJsonArgs {
  background: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  description: Maybe<StringQueryOperatorInput>;
  fields: Maybe<AlbumsJsonFieldsFilterInput>;
  gatsbyPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  images: Maybe<AlbumsJsonImagesFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QueryAllAboutJsonArgs {
  filter: Maybe<AboutJsonFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<AboutJsonSortInput>;
}


export interface QueryAllAlbumsJsonArgs {
  filter: Maybe<AlbumsJsonFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<AlbumsJsonSortInput>;
}


export interface QueryAllBackstageJsonArgs {
  filter: Maybe<BackstageJsonFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<BackstageJsonSortInput>;
}


export interface QueryAllContactsJsonArgs {
  filter: Maybe<ContactsJsonFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<ContactsJsonSortInput>;
}


export interface QueryAllDirectoryArgs {
  filter: Maybe<DirectoryFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<DirectorySortInput>;
}


export interface QueryAllFileArgs {
  filter: Maybe<FileFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<FileSortInput>;
}


export interface QueryAllImageSharpArgs {
  filter: Maybe<ImageSharpFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<ImageSharpSortInput>;
}


export interface QueryAllMarkdownRemarkArgs {
  filter: Maybe<MarkdownRemarkFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<MarkdownRemarkSortInput>;
}


export interface QueryAllPicsJsonArgs {
  filter: Maybe<PicsJsonFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<PicsJsonSortInput>;
}


export interface QueryAllPicturesJsonArgs {
  filter: Maybe<PicturesJsonFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<PicturesJsonSortInput>;
}


export interface QueryAllSeriesJsonArgs {
  filter: Maybe<SeriesJsonFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SeriesJsonSortInput>;
}


export interface QueryAllSiteArgs {
  filter: Maybe<SiteFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SiteSortInput>;
}


export interface QueryAllSiteBuildMetadataArgs {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SiteBuildMetadataSortInput>;
}


export interface QueryAllSiteFunctionArgs {
  filter: Maybe<SiteFunctionFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SiteFunctionSortInput>;
}


export interface QueryAllSitePageArgs {
  filter: Maybe<SitePageFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SitePageSortInput>;
}


export interface QueryAllSitePluginArgs {
  filter: Maybe<SitePluginFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SitePluginSortInput>;
}


export interface QueryBackstageJsonArgs {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QueryContactsJsonArgs {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QueryDirectoryArgs {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
}


export interface QueryFileArgs {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  childAboutJson: Maybe<AboutJsonFilterInput>;
  childAlbumsJson: Maybe<AlbumsJsonFilterInput>;
  childBackstageJson: Maybe<BackstageJsonFilterInput>;
  childContactsJson: Maybe<ContactsJsonFilterInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childPicsJson: Maybe<PicsJsonFilterInput>;
  childPicturesJson: Maybe<PicturesJsonFilterInput>;
  childSeriesJson: Maybe<SeriesJsonFilterInput>;
  children: Maybe<NodeFilterListInput>;
  childrenAboutJson: Maybe<AboutJsonFilterListInput>;
  childrenAlbumsJson: Maybe<AlbumsJsonFilterListInput>;
  childrenBackstageJson: Maybe<BackstageJsonFilterListInput>;
  childrenContactsJson: Maybe<ContactsJsonFilterListInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childrenPicsJson: Maybe<PicsJsonFilterListInput>;
  childrenPicturesJson: Maybe<PicturesJsonFilterListInput>;
  childrenSeriesJson: Maybe<SeriesJsonFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
}


export interface QueryImageSharpArgs {
  children: Maybe<NodeFilterListInput>;
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<GatsbyImageDataQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
}


export interface QueryMarkdownRemarkArgs {
  children: Maybe<NodeFilterListInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
}


export interface QueryPicsJsonArgs {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pictures: Maybe<PicturesJsonFilterListInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QueryPicturesJsonArgs {
  background: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  description: Maybe<StringQueryOperatorInput>;
  fields: Maybe<PicturesJsonFieldsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  image: Maybe<FileFilterInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QuerySeriesJsonArgs {
  albums: Maybe<AlbumsJsonFilterListInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
}


export interface QuerySiteArgs {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  port: Maybe<IntQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
}


export interface QuerySiteBuildMetadataArgs {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
}


export interface QuerySiteFunctionArgs {
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  functionRoute: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
}


export interface QuerySitePageArgs {
  children: Maybe<NodeFilterListInput>;
  component: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
}


export interface QuerySitePluginArgs {
  browserAPIs: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
}

export interface SeriesJson extends Node {
  readonly __typename?: 'SeriesJson';
  readonly albums: Maybe<ReadonlyArray<Maybe<AlbumsJson>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
}

export interface SeriesJsonConnection {
  readonly __typename?: 'SeriesJsonConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SeriesJsonEdge>;
  readonly group: ReadonlyArray<SeriesJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SeriesJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SeriesJsonConnectionDistinctArgs {
  field: SeriesJsonFieldsEnum;
}


export interface SeriesJsonConnectionGroupArgs {
  field: SeriesJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface SeriesJsonEdge {
  readonly __typename?: 'SeriesJsonEdge';
  readonly next: Maybe<SeriesJson>;
  readonly node: SeriesJson;
  readonly previous: Maybe<SeriesJson>;
}

export enum SeriesJsonFieldsEnum {
  albums = 'albums',
  albums___background = 'albums___background',
  albums___children = 'albums___children',
  albums___children___children = 'albums___children___children',
  albums___children___children___children = 'albums___children___children___children',
  albums___children___children___id = 'albums___children___children___id',
  albums___children___id = 'albums___children___id',
  albums___children___internal___content = 'albums___children___internal___content',
  albums___children___internal___contentDigest = 'albums___children___internal___contentDigest',
  albums___children___internal___description = 'albums___children___internal___description',
  albums___children___internal___fieldOwners = 'albums___children___internal___fieldOwners',
  albums___children___internal___ignoreType = 'albums___children___internal___ignoreType',
  albums___children___internal___mediaType = 'albums___children___internal___mediaType',
  albums___children___internal___owner = 'albums___children___internal___owner',
  albums___children___internal___type = 'albums___children___internal___type',
  albums___children___parent___children = 'albums___children___parent___children',
  albums___children___parent___id = 'albums___children___parent___id',
  albums___description = 'albums___description',
  albums___fields___slug = 'albums___fields___slug',
  albums___gatsbyPath = 'albums___gatsbyPath',
  albums___id = 'albums___id',
  albums___images = 'albums___images',
  albums___images___cover = 'albums___images___cover',
  albums___images___url___absolutePath = 'albums___images___url___absolutePath',
  albums___images___url___accessTime = 'albums___images___url___accessTime',
  albums___images___url___atime = 'albums___images___url___atime',
  albums___images___url___atimeMs = 'albums___images___url___atimeMs',
  albums___images___url___base = 'albums___images___url___base',
  albums___images___url___birthTime = 'albums___images___url___birthTime',
  albums___images___url___birthtime = 'albums___images___url___birthtime',
  albums___images___url___birthtimeMs = 'albums___images___url___birthtimeMs',
  albums___images___url___blksize = 'albums___images___url___blksize',
  albums___images___url___blocks = 'albums___images___url___blocks',
  albums___images___url___changeTime = 'albums___images___url___changeTime',
  albums___images___url___children = 'albums___images___url___children',
  albums___images___url___childrenAboutJson = 'albums___images___url___childrenAboutJson',
  albums___images___url___childrenAlbumsJson = 'albums___images___url___childrenAlbumsJson',
  albums___images___url___childrenBackstageJson = 'albums___images___url___childrenBackstageJson',
  albums___images___url___childrenContactsJson = 'albums___images___url___childrenContactsJson',
  albums___images___url___childrenImageSharp = 'albums___images___url___childrenImageSharp',
  albums___images___url___childrenPicsJson = 'albums___images___url___childrenPicsJson',
  albums___images___url___childrenPicturesJson = 'albums___images___url___childrenPicturesJson',
  albums___images___url___childrenSeriesJson = 'albums___images___url___childrenSeriesJson',
  albums___images___url___ctime = 'albums___images___url___ctime',
  albums___images___url___ctimeMs = 'albums___images___url___ctimeMs',
  albums___images___url___dev = 'albums___images___url___dev',
  albums___images___url___dir = 'albums___images___url___dir',
  albums___images___url___ext = 'albums___images___url___ext',
  albums___images___url___extension = 'albums___images___url___extension',
  albums___images___url___gid = 'albums___images___url___gid',
  albums___images___url___id = 'albums___images___url___id',
  albums___images___url___ino = 'albums___images___url___ino',
  albums___images___url___mode = 'albums___images___url___mode',
  albums___images___url___modifiedTime = 'albums___images___url___modifiedTime',
  albums___images___url___mtime = 'albums___images___url___mtime',
  albums___images___url___mtimeMs = 'albums___images___url___mtimeMs',
  albums___images___url___name = 'albums___images___url___name',
  albums___images___url___nlink = 'albums___images___url___nlink',
  albums___images___url___prettySize = 'albums___images___url___prettySize',
  albums___images___url___publicURL = 'albums___images___url___publicURL',
  albums___images___url___rdev = 'albums___images___url___rdev',
  albums___images___url___relativeDirectory = 'albums___images___url___relativeDirectory',
  albums___images___url___relativePath = 'albums___images___url___relativePath',
  albums___images___url___root = 'albums___images___url___root',
  albums___images___url___size = 'albums___images___url___size',
  albums___images___url___sourceInstanceName = 'albums___images___url___sourceInstanceName',
  albums___images___url___uid = 'albums___images___url___uid',
  albums___internal___content = 'albums___internal___content',
  albums___internal___contentDigest = 'albums___internal___contentDigest',
  albums___internal___description = 'albums___internal___description',
  albums___internal___fieldOwners = 'albums___internal___fieldOwners',
  albums___internal___ignoreType = 'albums___internal___ignoreType',
  albums___internal___mediaType = 'albums___internal___mediaType',
  albums___internal___owner = 'albums___internal___owner',
  albums___internal___type = 'albums___internal___type',
  albums___parent___children = 'albums___parent___children',
  albums___parent___children___children = 'albums___parent___children___children',
  albums___parent___children___id = 'albums___parent___children___id',
  albums___parent___id = 'albums___parent___id',
  albums___parent___internal___content = 'albums___parent___internal___content',
  albums___parent___internal___contentDigest = 'albums___parent___internal___contentDigest',
  albums___parent___internal___description = 'albums___parent___internal___description',
  albums___parent___internal___fieldOwners = 'albums___parent___internal___fieldOwners',
  albums___parent___internal___ignoreType = 'albums___parent___internal___ignoreType',
  albums___parent___internal___mediaType = 'albums___parent___internal___mediaType',
  albums___parent___internal___owner = 'albums___parent___internal___owner',
  albums___parent___internal___type = 'albums___parent___internal___type',
  albums___parent___parent___children = 'albums___parent___parent___children',
  albums___parent___parent___id = 'albums___parent___parent___id',
  albums___title = 'albums___title',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export interface SeriesJsonFilterInput {
  readonly albums: Maybe<AlbumsJsonFilterListInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
}

export interface SeriesJsonFilterListInput {
  readonly elemMatch: Maybe<SeriesJsonFilterInput>;
}

export interface SeriesJsonGroupConnection {
  readonly __typename?: 'SeriesJsonGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SeriesJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SeriesJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SeriesJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SeriesJsonGroupConnectionDistinctArgs {
  field: SeriesJsonFieldsEnum;
}


export interface SeriesJsonGroupConnectionGroupArgs {
  field: SeriesJsonFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface SeriesJsonGroupConnectionMaxArgs {
  field: SeriesJsonFieldsEnum;
}


export interface SeriesJsonGroupConnectionMinArgs {
  field: SeriesJsonFieldsEnum;
}


export interface SeriesJsonGroupConnectionSumArgs {
  field: SeriesJsonFieldsEnum;
}

export interface SeriesJsonSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SeriesJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface Site extends Node {
  readonly __typename?: 'Site';
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly flags: Maybe<SiteFlags>;
  readonly host: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly port: Maybe<Scalars['Int']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
}


export interface SiteBuildTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}

export interface SiteBuildMetadata extends Node {
  readonly __typename?: 'SiteBuildMetadata';
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
}


export interface SiteBuildMetadataBuildTimeArgs {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
}

export interface SiteBuildMetadataConnection {
  readonly __typename?: 'SiteBuildMetadataConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SiteBuildMetadataConnectionDistinctArgs {
  field: SiteBuildMetadataFieldsEnum;
}


export interface SiteBuildMetadataConnectionGroupArgs {
  field: SiteBuildMetadataFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface SiteBuildMetadataEdge {
  readonly __typename?: 'SiteBuildMetadataEdge';
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
}

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export interface SiteBuildMetadataFilterInput {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
}

export interface SiteBuildMetadataGroupConnection {
  readonly __typename?: 'SiteBuildMetadataGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SiteBuildMetadataGroupConnectionDistinctArgs {
  field: SiteBuildMetadataFieldsEnum;
}


export interface SiteBuildMetadataGroupConnectionGroupArgs {
  field: SiteBuildMetadataFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface SiteBuildMetadataGroupConnectionMaxArgs {
  field: SiteBuildMetadataFieldsEnum;
}


export interface SiteBuildMetadataGroupConnectionMinArgs {
  field: SiteBuildMetadataFieldsEnum;
}


export interface SiteBuildMetadataGroupConnectionSumArgs {
  field: SiteBuildMetadataFieldsEnum;
}

export interface SiteBuildMetadataSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface SiteConnection {
  readonly __typename?: 'SiteConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SiteConnectionDistinctArgs {
  field: SiteFieldsEnum;
}


export interface SiteConnectionGroupArgs {
  field: SiteFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface SiteEdge {
  readonly __typename?: 'SiteEdge';
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
}

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  flags___FAST_DEV = 'flags___FAST_DEV',
  flags___PARALLEL_SOURCING = 'flags___PARALLEL_SOURCING',
  host = 'host',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  port = 'port',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___title = 'siteMetadata___title'
}

export interface SiteFilterInput {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
}

export interface SiteFlags {
  readonly __typename?: 'SiteFlags';
  readonly FAST_DEV: Maybe<Scalars['Boolean']>;
  readonly PARALLEL_SOURCING: Maybe<Scalars['Boolean']>;
}

export interface SiteFlagsFilterInput {
  readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>;
  readonly PARALLEL_SOURCING: Maybe<BooleanQueryOperatorInput>;
}

export interface SiteFunction extends Node {
  readonly __typename?: 'SiteFunction';
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
}

export interface SiteFunctionConnection {
  readonly __typename?: 'SiteFunctionConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SiteFunctionConnectionDistinctArgs {
  field: SiteFunctionFieldsEnum;
}


export interface SiteFunctionConnectionGroupArgs {
  field: SiteFunctionFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface SiteFunctionEdge {
  readonly __typename?: 'SiteFunctionEdge';
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
}

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  functionRoute = 'functionRoute',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginName = 'pluginName',
  relativeCompiledFilePath = 'relativeCompiledFilePath'
}

export interface SiteFunctionFilterInput {
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
}

export interface SiteFunctionGroupConnection {
  readonly __typename?: 'SiteFunctionGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SiteFunctionGroupConnectionDistinctArgs {
  field: SiteFunctionFieldsEnum;
}


export interface SiteFunctionGroupConnectionGroupArgs {
  field: SiteFunctionFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface SiteFunctionGroupConnectionMaxArgs {
  field: SiteFunctionFieldsEnum;
}


export interface SiteFunctionGroupConnectionMinArgs {
  field: SiteFunctionFieldsEnum;
}


export interface SiteFunctionGroupConnectionSumArgs {
  field: SiteFunctionFieldsEnum;
}

export interface SiteFunctionSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface SiteGroupConnection {
  readonly __typename?: 'SiteGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SiteGroupConnectionDistinctArgs {
  field: SiteFieldsEnum;
}


export interface SiteGroupConnectionGroupArgs {
  field: SiteFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface SiteGroupConnectionMaxArgs {
  field: SiteFieldsEnum;
}


export interface SiteGroupConnectionMinArgs {
  field: SiteFieldsEnum;
}


export interface SiteGroupConnectionSumArgs {
  field: SiteFieldsEnum;
}

export interface SitePage extends Node {
  readonly __typename?: 'SitePage';
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly context: Maybe<SitePageContext>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
}

export interface SitePageConnection {
  readonly __typename?: 'SitePageConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SitePageConnectionDistinctArgs {
  field: SitePageFieldsEnum;
}


export interface SitePageConnectionGroupArgs {
  field: SitePageFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface SitePageContext {
  readonly __typename?: 'SitePageContext';
  readonly _xparams: Maybe<SitePageContext_Xparams>;
  readonly fields__slug: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
}

export interface SitePageContextFilterInput {
  readonly _xparams: Maybe<SitePageContext_XparamsFilterInput>;
  readonly fields__slug: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
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
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context____xparams___fields__slug = 'context____xparams___fields__slug',
  context___fields__slug = 'context___fields__slug',
  context___id = 'context___id',
  id = 'id',
  internalComponentName = 'internalComponentName',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  matchPath = 'matchPath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  pluginCreatorId = 'pluginCreatorId',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___pluginOptions___manualInit = 'pluginCreator___pluginOptions___manualInit',
  pluginCreator___pluginOptions___modulePath = 'pluginCreator___pluginOptions___modulePath',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___version = 'pluginCreator___version'
}

export interface SitePageFilterInput {
  readonly children: Maybe<NodeFilterListInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
}

export interface SitePageGroupConnection {
  readonly __typename?: 'SitePageGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SitePageGroupConnectionDistinctArgs {
  field: SitePageFieldsEnum;
}


export interface SitePageGroupConnectionGroupArgs {
  field: SitePageFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface SitePageGroupConnectionMaxArgs {
  field: SitePageFieldsEnum;
}


export interface SitePageGroupConnectionMinArgs {
  field: SitePageFieldsEnum;
}


export interface SitePageGroupConnectionSumArgs {
  field: SitePageFieldsEnum;
}

export interface SitePageSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface SitePlugin extends Node {
  readonly __typename?: 'SitePlugin';
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
}

export interface SitePluginConnection {
  readonly __typename?: 'SitePluginConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SitePluginConnectionDistinctArgs {
  field: SitePluginFieldsEnum;
}


export interface SitePluginConnectionGroupArgs {
  field: SitePluginFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
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

export interface SitePluginEdge {
  readonly __typename?: 'SitePluginEdge';
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
}

export enum SitePluginFieldsEnum {
  browserAPIs = 'browserAPIs',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  nodeAPIs = 'nodeAPIs',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___description = 'packageJson___description',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___keywords = 'packageJson___keywords',
  packageJson___license = 'packageJson___license',
  packageJson___main = 'packageJson___main',
  packageJson___name = 'packageJson___name',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___version = 'packageJson___version',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginFilepath = 'pluginFilepath',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___cssLoaderOptions___modules___namedExport = 'pluginOptions___cssLoaderOptions___modules___namedExport',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  pluginOptions___manualInit = 'pluginOptions___manualInit',
  pluginOptions___modulePath = 'pluginOptions___modulePath',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  resolve = 'resolve',
  ssrAPIs = 'ssrAPIs',
  version = 'version'
}

export interface SitePluginFilterInput {
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginGroupConnection {
  readonly __typename?: 'SitePluginGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
}


export interface SitePluginGroupConnectionDistinctArgs {
  field: SitePluginFieldsEnum;
}


export interface SitePluginGroupConnectionGroupArgs {
  field: SitePluginFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
}


export interface SitePluginGroupConnectionMaxArgs {
  field: SitePluginFieldsEnum;
}


export interface SitePluginGroupConnectionMinArgs {
  field: SitePluginFieldsEnum;
}


export interface SitePluginGroupConnectionSumArgs {
  field: SitePluginFieldsEnum;
}

export interface SitePluginPackageJson {
  readonly __typename?: 'SitePluginPackageJson';
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly description: Maybe<Scalars['String']>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly license: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly version: Maybe<Scalars['String']>;
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
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
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
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly cssLoaderOptions: Maybe<SitePluginPluginOptionsCssLoaderOptions>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly manualInit: Maybe<Scalars['Boolean']>;
  readonly modulePath: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
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
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly cssLoaderOptions: Maybe<SitePluginPluginOptionsCssLoaderOptionsFilterInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly manualInit: Maybe<BooleanQueryOperatorInput>;
  readonly modulePath: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginSortInput {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
}

export interface SiteSiteMetadata {
  readonly __typename?: 'SiteSiteMetadata';
  readonly description: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
}

export interface SiteSiteMetadataFilterInput {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
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
  readonly glob: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ne: Maybe<Scalars['String']>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
}

export interface TransformOptions {
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly fit: Maybe<ImageFit>;
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
}

export interface WebPOptions {
  readonly quality: Maybe<Scalars['Int']>;
}

export type GatsbyImageSharpFixedFragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] }
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type SeriesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SeriesPageQuery = (
  { readonly __typename?: 'Query' }
  & { readonly page: Maybe<(
    { readonly __typename?: 'SeriesJson' }
    & Pick<SeriesJson, 'title'>
    & { readonly albums: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'AlbumsJson' }
      & Pick<AlbumsJson, 'background' | 'description' | 'title'>
      & { readonly fields: Maybe<(
        { readonly __typename?: 'AlbumsJsonFields' }
        & Pick<AlbumsJsonFields, 'slug'>
      )>, readonly images: Maybe<ReadonlyArray<Maybe<(
        { readonly __typename?: 'AlbumsJsonImages' }
        & Pick<AlbumsJsonImages, 'cover'>
        & { readonly url: Maybe<(
          { readonly __typename?: 'File' }
          & { readonly childImageSharp: Maybe<(
            { readonly __typename?: 'ImageSharp' }
            & Pick<ImageSharp, 'gatsbyImageData'>
          )> }
        )> }
      )>>> }
    )>>> }
  )> }
);

export type PicsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type PicsPageQuery = (
  { readonly __typename?: 'Query' }
  & { readonly page: Maybe<(
    { readonly __typename?: 'PicsJson' }
    & Pick<PicsJson, 'title'>
    & { readonly pictures: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'PicturesJson' }
      & Pick<PicturesJson, 'background' | 'title' | 'description'>
      & { readonly fields: Maybe<(
        { readonly __typename?: 'PicturesJsonFields' }
        & Pick<PicturesJsonFields, 'slug'>
      )>, readonly image: Maybe<(
        { readonly __typename?: 'File' }
        & { readonly childImageSharp: Maybe<(
          { readonly __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )> }
    )>>> }
  )> }
);

export type AlbumPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AlbumPageQuery = (
  { readonly __typename?: 'Query' }
  & { readonly content: Maybe<(
    { readonly __typename?: 'AlbumsJson' }
    & Pick<AlbumsJson, 'title' | 'description' | 'background'>
    & { readonly images: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'AlbumsJsonImages' }
      & { readonly url: Maybe<(
        { readonly __typename?: 'File' }
        & { readonly childImageSharp: Maybe<(
          { readonly __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )> }
    )>>> }
  )> }
);

export type PicPageQueryVariables = Exact<{
  id: Scalars['String'];
  previousPicId: Maybe<Scalars['String']>;
  nextPicId: Maybe<Scalars['String']>;
}>;


export type PicPageQuery = (
  { readonly __typename?: 'Query' }
  & { readonly picture: Maybe<(
    { readonly __typename?: 'PicturesJson' }
    & Pick<PicturesJson, 'title' | 'description'>
    & { readonly image: Maybe<(
      { readonly __typename?: 'File' }
      & { readonly childImageSharp: Maybe<(
        { readonly __typename?: 'ImageSharp' }
        & Pick<ImageSharp, 'gatsbyImageData'>
      )> }
    )> }
  )>, readonly previous: Maybe<(
    { readonly __typename?: 'PicturesJson' }
    & Pick<PicturesJson, 'title'>
    & { readonly fields: Maybe<(
      { readonly __typename?: 'PicturesJsonFields' }
      & Pick<PicturesJsonFields, 'slug'>
    )> }
  )>, readonly next: Maybe<(
    { readonly __typename?: 'PicturesJson' }
    & Pick<PicturesJson, 'title'>
    & { readonly fields: Maybe<(
      { readonly __typename?: 'PicturesJsonFields' }
      & Pick<PicturesJsonFields, 'slug'>
    )> }
  )> }
);
