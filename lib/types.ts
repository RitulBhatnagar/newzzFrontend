import { ReactNode } from "react";

export interface TranslatedArticle {
	translatedArticleId: string;
	translatedArticle: string;
	_id: string;
}

export interface ArticleSimilarFrom {
	title: string;
	source: string;
	articleId: string;
	_id: string;
}

export interface ArticleMetadata {
	articleMetrics: {
		articleDisliked: any;
		articleLiked: number;
	};
	articleSource: string;
	articleBaseUrl: string;
	articleTimeStampExtracted: number;
	category: string;
	articlePublishedOn: string;
	author: string;
	tags: string[];
	articleLastUpdatedOn: string;
	_id: string;
}

export interface Article {
	translatedArticles: {
		[key: string]: TranslatedArticle[];
	};
	_id: string;
	articleId: string;
	ArticleSimilarFrom: ArticleSimilarFrom[];
	__v: number;
	content: string;
	imageURI: string;
	link: string;
	metadata: ArticleMetadata;
  subHeading : string;
	title: string;
	isPublished: boolean;
	isTranslated: boolean;
}

export interface TabItems {
	title: string;
	content: ReactNode;
}
export interface PromptsList {
	text: string;
	promptId: string;
	isPublished: boolean;
	isTranslated: boolean;
}

export interface Metrics {
	totalArticlesScrapped: number;
	totalArticlesTranslated: number;
	totalNontranslatedArticles: number;
	totalPublishedArticles: number;
	totalUnpublishArticles: number;
}
export interface ExtractedResult {
	extractedResult: {
		usage: {
			prompt_tokens: number;
			completion_tokens: number;
			total_tokens: number;
		};
		choices: {
			index: number;
			message: {
				role: string;
				content: string;
			};
			logprobs: any;
			finish_reason: string;
		}[];
	};
}

export interface PromptMetrices {
	creationTime: string;
	creatorEmailId: string;
	creatorUserId: string;
	_id: string;
}

export interface PromptsInfo {
	promptId: string;
	percentage_efficiency: number;
	provider: string;
	text: string;
	title: string;
	totalUsed: number;
	metrices: PromptMetrices;
}

export interface Recap {
	weeklyRecapId: string;
	title: string;
	imageURI: string;
	FromDate: string;
	ToDate: string;
	isPublished: boolean;
	articles: string[];
}
