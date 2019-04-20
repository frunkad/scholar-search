import scholarly_modified as scholarly
search_query = scholarly.search_pubs_query('neural nets')
for article in search_query:
    print(article)
    break