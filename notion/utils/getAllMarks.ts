import notion from '../api.ts'

interface Props {
  quantity?: number
  dbID: string
}

/**
 * Retrieves marks from the Notion database.
 * @param quantity - Number of items to fetch (optional), default -1 (all items).
 * @returns {Promise<T[]>} An array of results from Notion.
 */
export async function getAllMarksDB<T = any>({ quantity = -1, dbID }: Props): Promise<T[]> {
  let allResults: T[] = []
  let hasMore = true
  let startCursor: string | undefined = undefined

  const page_size = quantity === -1 ? 100 : Math.min(quantity, 100)

  while (hasMore) {
    try {
      const response = await notion.databases.query({
        database_id: dbID,
        start_cursor: startCursor,
        page_size
      })

      if (!response) throw new Error('Failed to retrieve marks')

      const { has_more, results, next_cursor } = response

      allResults.push(...(results as T[]))
      hasMore = has_more
      startCursor = next_cursor ?? undefined

      if (quantity !== -1 && allResults.length >= quantity) break
    } catch (error) {
      console.error('Error querying Notion:', error)
      throw new Error('Critical failure in retrieving marks.')
    }
  }

  return allResults
}
