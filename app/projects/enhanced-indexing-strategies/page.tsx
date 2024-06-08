import { ArticleLayout } from "@/components/ArticleLayout";
import { type Article } from "@/lib/articles";

const article: Article = {
    author: 'Inamullah Mohammad',
    date: '2024-05-13',
    title: 'Enhanced indexing strategies for SQLite: Implementation and Evaluation',
    description:
      'We implemented and evaluated Generalized Inverted Index (GIN) and Block Range Index (BRIN) in SQLite, aiming to enhance query performance for large datasets. Our tests showed that while BRIN indexing significantly outperforms other methods in querying time, the use of GIN should be carefully considered due to its substantial setup and querying overhead in SQLite environments.',
    href: 'enhanced-indexing-strategies',
    formattedDate: 'May 13, 2024'
}

export default function EnhancedIndexingStrategies() {
    return (
      <ArticleLayout article={article}>
        <div>
          <p>
          In our new project, we integrate <code>GIN</code> and <code>BRIN</code> indexing techniques into SQLite to enhance query performance for large datasets. This implementation aims to augment SQLite&lsquo;s indexing capabilities, catering to diverse application requirements demanding robust solutions. By seamlessly integrating these novel techniques as loadable extensions, we strive to significantly advance SQLite&lsquo;s capabilities, improving responsiveness and efficiency in handling various data types and scalability.
          </p>
          {/* <pre style={{ whiteSpace: 'pre-wrap' }}>
            <code>
                #include &lt;sqlite3ext.h&gt;
                SQLITE_EXTENSION_INIT1

                // other libraries and headers

                // Index specific functions for creating, deleting and updating index 

                #ifdef _WIN32
                __declspec(dllexport)
                #endif
                int sqlite3_extension_init(
                  sqlite3 *db, 
                  char **pzErrMsg, 
                  const sqlite3_api_routines *pApi ){ 

                  // Index specific initialization
                }
            </code>
          </pre> */}
          <p>
          In SQLite, the architecture involves the <code>SQLite C API</code> at the interface level, supported by a detailed tokenizer and parser for SQL statements. The proposed architecture integrates GIN and BRIN indexes seamlessly as loadable extensions, enhancing SQLite&lsquo;s indexing capabilities.
          </p>
          <p>
          To create and use loadable extensions in SQLite, we need to follow these steps:
          <ol className="space-y-0">
          <li className="m-0">Develop the extension code implementing the desired functionality, following the SQLite extension framework. </li>
          <li>Compile the code into a shared library (e.g., &quot;.so&quot; on Unix-like systems, DLL on Windows).</li>
          <li>Use the <code>sqlite3_load_extension()</code> function or the <code>.load</code> command in the SQLite shell to load the compiled extension.</li>
          <li>Once loaded, you can use the extended functionality in your SQLite environment.</li>
          </ol>
          </p>
          <h4 className="font-semibold text-lg">GIN Implementation</h4>
          <p>
          The Generalized Inverted Index (GIN) in SQLite is implemented through a custom extension for text data processing and indexing. GIN handles parsing, tokenization, and case-insensitivity for text terms, inserting them into the index table, <code>GINIndexTable (term, row_id)</code>. Mutex locks ensure concurrency control in multi-threaded environments. User-defined functions interact with the GIN index for efficient term-based searches. 
          </p>
          <table>
              <thead>
                <tr>
                  <th> Index Type </th>
                  <th> Creation Time (s) </th>
                  <th> Querying Time (s) </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> No Index </td>
                  <td>NA</td>
                  <td>1.356</td>
                </tr>
                <tr>
                  <td> B Tree </td>
                  <td>0.029</td>
                  <td>1.393</td>
                </tr>
                <tr>
                  <td> GIN </td>
                  <td>170.193</td>
                  <td>7.383</td>
                </tr>
              </tbody>
            </table>

            <p>However, results suggest that while GIN enhances text search capabilities, its efficiency in SQLite may not always justify its use. Setup time, query performance overhead, and resource demands for maintaining the index could hinder system performance, especially in lightweight or resource-limited SQLite environments.</p>
        
            <h4 className="font-semibold text-lg">BRIN Implementation</h4>
            <p>The Block Range Index (BRIN) is implemented in SQLite as a custom extension to efficiently handle large datasets, particularly for range queries on sequentially ordered data like timestamps. BRIN organizes data blocks based on ranges, enabling quick identification of relevant blocks during query processing. The implementation showcases slower index creation but significantly faster querying times compared to traditional B-Tree indexing within SQLite. This efficiency in query processing makes BRIN particularly suitable for applications with frequent and complex queries, offering a balance between space savings and query performance, especially in scenarios involving extensive temporal analytics workloads.</p>
            <table>
              <table>
                <thead>
                  <tr>
                    <th> Index Type </th>
                    <th> Creation Time (s) </th>
                    <th> Querying Time (s) </th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td> No Index </td>
                  <td>NA</td>
                  <td>0.03</td>
                </tr>
                <tr>
                  <td> B Tree </td>
                  <td>0.172</td>
                  <td>1.039</td>
                </tr>
                <tr>
                  <td> GIN </td>
                  <td>1.024</td>
                  <td>0.004</td>
                </tr>
              </tbody>
              </table>
            </table>
            <p>In conclusion, the Generalized Inverted Index (GIN) in SQLite presents significant limitations due to its high overhead in index creation and maintenance, making it less suitable for SQLite&lsquo;s typical lightweight and rapid data access applications. On the other hand, the Block Range Index (BRIN) shows potential for improving query performance on large datasets, but its effectiveness relies heavily on data being naturally ordered or clustered, which may not always be the case.</p>
        </div>
      </ArticleLayout>
    )
  }