import './index.css'

const RepositoryItem = props => {
  const {repositoryData} = props
  const {imageUrl, name, starsCount, forksCount, issuesCount} = repositoryData

  return (
    <li className="repository-card-item-container">
      <img src={imageUrl} className="card-item-img" alt={name} />
      <h1 className="card-item-name">{name}</h1>
      <div className="stars-container">
        <img
          className="stars-icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="stars-text">{starsCount}</p>
      </div>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars-icon"
        />
        <p className="stars-text">{forksCount}</p>
      </div>
      <div className="stars-container">
        <img
          className="stars-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="stars-text">{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem

// import './index.css'

// const RepositoryItem = props => {
//   const {repositoryDetails} = props
//   const {
//     name,
//     imageUrl,
//     starsCount,
//     forksCount,
//     issuesCount,
//   } = repositoryDetails

//   return (
//     <li className="repository-item">
//       <img className="repository-image" src={imageUrl} alt={name} />
//       <h1 className="repository-name">{name}</h1>
//       <div className="stats-container">
//         <img
//           className="stats-icon"
//           src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
//           alt="stars"
//         />
//         <p className="stats-text">{starsCount} stars</p>
//       </div>
//       <div className="stats-container">
//         <img
//           className="stats-icon"
//           src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
//           alt="forks"
//         />
//         <p className="stats-text">{forksCount} forks</p>
//       </div>
//       <div className="stats-container">
//         <img
//           className="stats-icon"
//           src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
//           alt="open issues"
//         />
//         <p className="stats-text">{issuesCount} open issues</p>
//       </div>
//     </li>
//   )
// }

// export default RepositoryItem
