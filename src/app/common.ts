export interface ServiceCard2 {
  img: string,
  heading: string,
  description: string,
  learMore: string
}

export interface ExperienceDetailsRight {
  img: string,
  heading: string,
  heading1: string
}

export interface TechnologyBackEnd {
  backEnd?: string,
  img: string,
  language: string,
}

export interface Empowerbox {
  img: string,
  heading: string,
  heading1: string,
  detail: string
}

export interface RatingBox {
  heading: number,
  detail1: string,
  detail2: string,
  review: string,
}

export interface OurBlogs {
  title?: string,
  img: string,
  blogButton: string,
  blogDate: string,
  heading: string,
  heading1: string,
  readMore: string
}

export interface GlobalPresence {
  title?: string,
  countryName: string,
  address: string,
  mobileNo: string,
  gmail?: string
}

export interface FooterHrInquiry {
  title: string,
  gmail: string,
  mobileNo?: string,
  companyName?: string
}

export interface FooterHelp {
  heading?: string,
  title: string,
  class: string
}