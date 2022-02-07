import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'jnfdfrgd',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
  token:
    'sktgVXIxb733dNfBCaF4xPq3AvN0qvOYmoru8vEnhw1h4dzXNFuN6RVJOfVA7xItLpr2518SEdzZCPv4v7syTcKSY5bRiHtse9ud9gcdL22npgQ3nBQ0TgB5B9K161n82DzaGpzvXmwaNCnP3AGnbd1Nw9yVI6EHu19fQCzgcLlTTwxmEopo',
})
