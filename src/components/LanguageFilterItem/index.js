import './index.css'

const LanguageFilterItem = props => {
  const {
    isSelected,
    languageFilter,
    setSelectedLanguageFilterAndGetRepositories,
  } = props
  const btnClassName = isSelected ? 'lang-btn selected-lang-btn' : 'lang-btn'

  const onClickBtnLangFilter = () => {
    setSelectedLanguageFilterAndGetRepositories(languageFilter.id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        type="button"
        onClick={onClickBtnLangFilter}
      >
        {languageFilter.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem

// const LanguageFilterItem = props => {
//   const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
//   const {id, language} = languageFilterDetails
//   const btnClassName = isActive
//     ? 'language-btn active-language-btn'
//     : 'language-btn'
//   const onClickLanguageFilter = () => {
//     setActiveLanguageFilterId(id)
//   }

//   return (
//     <li>
//       <button className="button" onClick={onClickLanguageFilter} type="button">
//         {language}
//       </button>
//     </li>
//   )
// }

// export default LanguageFilterItem
