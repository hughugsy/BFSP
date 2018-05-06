import React from 'react';
import { InstantSearch, Configure } from 'react-instantsearch/dom';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import Autosuggest from 'react-autosuggest';
// import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme.css';
import SearchIcon from './search.png';
import { Link } from 'react-router';

const Search = () => (
  <InstantSearch
    appId="VJQN417WCB"
    apiKey="df879aabbc3921137a9c47acbe4cbee8"
    indexName="posts"
  >

    <AutoComplete />

    <Configure hitsPerPage={3} />

  </InstantSearch>
);

const renderSearchIcon = (inputProps) => (
  <div style={{ position: 'relative' }}>
    <img
      style={{
        position: 'absolute',
        top: '3px',
        right: '10px',
        width: '100px',
        height: '24px' }}
      src={SearchIcon}
    />
    <input {...inputProps} />
  </div>

);


const AutoComplete = connectAutoComplete(
    ({ hits, currentRefinement, refine }) => (
      <Autosuggest
        suggestions={hits}

        onSuggestionsFetchRequested={({ value }) => refine(value)}
        onSuggestionsClearRequested={() => refine('')}
        getSuggestionValue={hit => hit.title}
        renderSuggestion={hit => (
          <Link to={`/${hit.path}/${hit.slug}-${hit.cuid}`} >
            {hit.title}
          </Link>
        )}
        inputProps={{
          placeholder: 'Search',
          value: currentRefinement,
          onChange: () => {},
        }}
        renderSectionTitle={section => section.index}
        getSectionSuggestions={section => section.hits}
        theme={theme}
        renderInputComponent={renderSearchIcon}
      />
    )
  );

export default Search;
