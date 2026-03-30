import { Link } from 'react-router-dom'
const Card = ({ data, styles }) => {
  return (
    <>
        <div className={styles.backgroundColor + ' ' + styles.padding + ' ' + styles.borderRadius + ' ' + styles.shadow}>
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="mt-2 mb-4">
              {data.description}
        </p>
        <Link
              to={data.link}
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              {data.linkText}
            </Link>
          </div>
    </>
  )
}

export default Card


