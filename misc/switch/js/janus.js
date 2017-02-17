





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d311c4a37b4a480a760dda55c72eb656b70f39154f15e1b7a7f6506e143d7ec0.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5f9b35cedfc79777aca47137798257f30e25a604574d53e002ae26b3c9930bf7.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-7b63da03f09e96bbc0cc73ccdc359a70e6e50464763a01e9dad2be433480d7ac.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>janus-gateway/janus.js at master · meetecho/janus-gateway · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">


  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="CB0E:294C8:5D8779:973447:58A65D9C" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="CB0E:294C8:5D8779:973447:58A65D9C" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MTc0NmIzYzI1MGM4NDUwZmU4NTU4NTFkY2E2YmNlNzhmMDQwMDBkZTQyNzllMGY0Mzk4YTkxZjBjYWY1NTU3Znx7InJlbW90ZV9hZGRyZXNzIjoiNTEuMjU0LjI0NC40NCIsInJlcXVlc3RfaWQiOiJDQjBFOjI5NEM4OjVEODc3OTo5NzM0NDc6NThBNjVEOUMiLCJ0aW1lc3RhbXAiOjE0ODcyOTc5NDgsImhvc3QiOiJnaXRodWIuY29tIn0=">


  <meta name="html-safe-nonce" content="99d60265b45c0ae65eab6a5d266a20e7ad1f3f9c">

  <meta http-equiv="x-pjax-version" content="23929be193bd223d06c6c0868f90d120">
  

    
  <meta name="description" content="janus-gateway - Janus WebRTC Gateway">
  <meta name="go-import" content="github.com/meetecho/janus-gateway git https://github.com/meetecho/janus-gateway.git">

  <meta content="4520545" name="octolytics-dimension-user_id" /><meta content="meetecho" name="octolytics-dimension-user_login" /><meta content="16734696" name="octolytics-dimension-repository_id" /><meta content="meetecho/janus-gateway" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="16734696" name="octolytics-dimension-repository_network_root_id" /><meta content="meetecho/janus-gateway" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/meetecho/janus-gateway/commits/master.atom" rel="alternate" title="Recent Commits to janus-gateway:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/meetecho/janus-gateway/blob/master/html/janus.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production vis-public page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/personal" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source/stories /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business/why-github-for-work /business/security /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/meetecho/janus-gateway/search" class="js-site-search-form" data-scoped-search-url="/meetecho/janus-gateway/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


          <a class="text-bold" href="/login?return_to=%2Fmeetecho%2Fjanus-gateway%2Fblob%2Fmaster%2Fhtml%2Fjanus.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      



<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fmeetecho%2Fjanus-gateway"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/meetecho/janus-gateway/watchers"
     aria-label="149 users are watching this repository">
    149
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmeetecho%2Fjanus-gateway"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/meetecho/janus-gateway/stargazers"
      aria-label="1006 users starred this repository">
      1,006
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmeetecho%2Fjanus-gateway"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/meetecho/janus-gateway/network" class="social-count"
       aria-label="392 users forked this repository">
      392
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/meetecho" class="url fn" rel="author">meetecho</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/meetecho/janus-gateway" data-pjax="#js-repo-pjax-container">janus-gateway</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/meetecho/janus-gateway" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /meetecho/janus-gateway" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/meetecho/janus-gateway/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /meetecho/janus-gateway/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">18</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/meetecho/janus-gateway/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /meetecho/janus-gateway/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">9</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/meetecho/janus-gateway/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /meetecho/janus-gateway/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/meetecho/janus-gateway/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /meetecho/janus-gateway/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/meetecho/janus-gateway/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /meetecho/janus-gateway/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/meetecho/janus-gateway/blob/f123c27153515f42032eea6d44802cb45984ee9d/html/janus.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:2ddd21e267a63bbf3d553288fb3f4fa1 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/meetecho/janus-gateway/blob/ice-restart/html/janus.js"
               data-name="ice-restart"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ice-restart
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/meetecho/janus-gateway/blob/master/html/janus.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/meetecho/janus-gateway/blob/mjr-tempname/html/janus.js"
               data-name="mjr-tempname"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                mjr-tempname
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/meetecho/janus-gateway/blob/refcount/html/janus.js"
               data-name="refcount"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                refcount
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/meetecho/janus-gateway/blob/sdputils-pt2/html/janus.js"
               data-name="sdputils-pt2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                sdputils-pt2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/meetecho/janus-gateway/blob/web-refs/html/janus.js"
               data-name="web-refs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                web-refs
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/meetecho/janus-gateway/tree/v0.2.1/html/janus.js"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/meetecho/janus-gateway/tree/v0.2.0/html/janus.js"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/meetecho/janus-gateway/tree/v0.1.2/html/janus.js"
              data-name="v0.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.2">
                v0.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/meetecho/janus-gateway/tree/v0.1.1/html/janus.js"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/meetecho/janus-gateway/tree/v0.1.0/html/janus.js"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/meetecho/janus-gateway/tree/v0.0.9/html/janus.js"
              data-name="v0.0.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.9">
                v0.0.9
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/meetecho/janus-gateway/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/meetecho/janus-gateway"><span>janus-gateway</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/meetecho/janus-gateway/tree/master/html"><span>html</span></a></span><span class="separator">/</span><strong class="final-path">janus.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/meetecho/janus-gateway/commit/83b36fcc755658818cf47876ff6e1baedbf55537" data-pjax>
          83b36fc
        </a>
        <relative-time datetime="2017-02-09T11:57:48Z">Feb 9, 2017</relative-time>
      </span>
      <div>
        <img alt="@lminiero" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3684796?v=3&amp;s=40" width="20" />
        <a href="/lminiero" class="user-mention" rel="contributor">lminiero</a>
          <a href="/meetecho/janus-gateway/commit/83b36fcc755658818cf47876ff6e1baedbf55537" class="message" data-pjax="true" title="Added withCredentials support to XHR requests in janus[.nojquery].js (fixes #742)">Added withCredentials support to XHR requests in janus[.nojquery].js …</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>13</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="lminiero" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=lminiero"><img alt="@lminiero" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3684796?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="zazabe" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=zazabe"><img alt="@zazabe" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/401598?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="MathRobin" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=MathRobin"><img alt="@MathRobin" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1046585?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="leonuh" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=leonuh"><img alt="@leonuh" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/871634?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="leonklingele" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=leonklingele"><img alt="@leonklingele" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/5585491?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="uxmaster" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=uxmaster"><img alt="@uxmaster" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/5693497?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="atoppi" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=atoppi"><img alt="@atoppi" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3405061?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="MagicIndustries" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=MagicIndustries"><img alt="@MagicIndustries" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/570017?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rpadovani" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=rpadovani"><img alt="@rpadovani" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1713343?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ploxiln" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=ploxiln"><img alt="@ploxiln" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/649835?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mrauhu" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=mrauhu"><img alt="@mrauhu" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2821574?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="andreasg123" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=andreasg123"><img alt="@andreasg123" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/15636985?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="agclark81" href="/meetecho/janus-gateway/commits/master/html/janus.js?author=agclark81"><img alt="@agclark81" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/22404787?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@lminiero" height="24" src="https://avatars0.githubusercontent.com/u/3684796?v=3&amp;s=48" width="24" />
            <a href="/lminiero">lminiero</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zazabe" height="24" src="https://avatars1.githubusercontent.com/u/401598?v=3&amp;s=48" width="24" />
            <a href="/zazabe">zazabe</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@MathRobin" height="24" src="https://avatars3.githubusercontent.com/u/1046585?v=3&amp;s=48" width="24" />
            <a href="/MathRobin">MathRobin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@leonuh" height="24" src="https://avatars3.githubusercontent.com/u/871634?v=3&amp;s=48" width="24" />
            <a href="/leonuh">leonuh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@leonklingele" height="24" src="https://avatars1.githubusercontent.com/u/5585491?v=3&amp;s=48" width="24" />
            <a href="/leonklingele">leonklingele</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@uxmaster" height="24" src="https://avatars0.githubusercontent.com/u/5693497?v=3&amp;s=48" width="24" />
            <a href="/uxmaster">uxmaster</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@atoppi" height="24" src="https://avatars2.githubusercontent.com/u/3405061?v=3&amp;s=48" width="24" />
            <a href="/atoppi">atoppi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@MagicIndustries" height="24" src="https://avatars0.githubusercontent.com/u/570017?v=3&amp;s=48" width="24" />
            <a href="/MagicIndustries">MagicIndustries</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rpadovani" height="24" src="https://avatars3.githubusercontent.com/u/1713343?v=3&amp;s=48" width="24" />
            <a href="/rpadovani">rpadovani</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ploxiln" height="24" src="https://avatars0.githubusercontent.com/u/649835?v=3&amp;s=48" width="24" />
            <a href="/ploxiln">ploxiln</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mrauhu" height="24" src="https://avatars0.githubusercontent.com/u/2821574?v=3&amp;s=48" width="24" />
            <a href="/mrauhu">mrauhu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@andreasg123" height="24" src="https://avatars1.githubusercontent.com/u/15636985?v=3&amp;s=48" width="24" />
            <a href="/andreasg123">andreasg123</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@agclark81" height="24" src="https://avatars2.githubusercontent.com/u/22404787?v=3&amp;s=48" width="24" />
            <a href="/agclark81">agclark81</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/meetecho/janus-gateway/raw/master/html/janus.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/meetecho/janus-gateway/blame/master/html/janus.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/meetecho/janus-gateway/commits/master/html/janus.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      2272 lines (2211 sloc)
      <span class="file-info-divider"></span>
    79.9 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	The MIT License (MIT)</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	Copyright (c) 2016 Meetecho</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	Permission is hereby granted, free of charge, to any person obtaining</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	a copy of this software and associated documentation files (the &quot;Software&quot;),</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	to deal in the Software without restriction, including without limitation</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	the rights to use, copy, modify, merge, publish, distribute, sublicense,</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	and/or sell copies of the Software, and to permit persons to whom the</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	Software is furnished to do so, subject to the following conditions:</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	The above copyright notice and this permission notice shall be included</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	in all copies or substantial portions of the Software.</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	OTHER DEALINGS IN THE SOFTWARE.</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> List of sessions</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Screensharing Chrome Extension ID</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Janus</span>.<span class="pl-smi">extensionId</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>hapfgfdkleiggjjpfpenajgdnfckjpaj<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Janus</span>.<span class="pl-en">isExtensionEnabled</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Chrome<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> chromever <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Chrome<span class="pl-cce">\/</span>(<span class="pl-c1">.</span><span class="pl-k">*</span>) <span class="pl-pds">/</span></span>)[<span class="pl-c1">1</span>], <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> maxver <span class="pl-k">=</span> <span class="pl-c1">33</span>;</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Linux<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">			maxver <span class="pl-k">=</span> <span class="pl-c1">35</span>;	<span class="pl-c"><span class="pl-c">//</span> &quot;known&quot; crash in chrome 34 and 35 on linux</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(chromever <span class="pl-k">&gt;=</span> <span class="pl-c1">26</span> <span class="pl-k">&amp;&amp;</span> chromever <span class="pl-k">&lt;=</span> maxver) {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Older versions of Chrome don&#39;t support this extension-based approach, so lie</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#janus-extension-installed<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Firefox of others, no need for the extension (but this doesn&#39;t mean it will work)</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Janus</span>.<span class="pl-en">noop</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {};</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Initialization</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Janus</span>.<span class="pl-en">init</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">	options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">options</span>.<span class="pl-smi">callback</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">options</span>.<span class="pl-smi">callback</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">options</span>.<span class="pl-smi">callback</span> <span class="pl-k">:</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">Janus</span>.<span class="pl-smi">initDone</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Already initialized</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">options</span>.<span class="pl-en">callback</span>();</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-en">console</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> <span class="pl-en">console</span>.<span class="pl-smi">log</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">console</span> <span class="pl-k">=</span> { <span class="pl-en">log</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {} };</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Console logging (all debugging disabled by default)</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-smi">trace</span> <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-smi">debug</span> <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-smi">vdebug</span> <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-smi">log</span> <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-smi">warn</span> <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">options</span>.<span class="pl-smi">debug</span> <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">||</span> <span class="pl-smi">options</span>.<span class="pl-smi">debug</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>all<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Enable all debugging levels</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-smi">trace</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">trace</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-smi">debug</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">debug</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-smi">vdebug</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">debug</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-smi">log</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">log</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-smi">warn</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">warn</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">error</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">Array</span>.<span class="pl-en">isArray</span>(<span class="pl-smi">options</span>.<span class="pl-smi">debug</span>)) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">in</span> <span class="pl-smi">options</span>.<span class="pl-smi">debug</span>) {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">debug</span>[i];</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">switch</span>(d) {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>trace<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-smi">trace</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">trace</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>debug<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-smi">debug</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">debug</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>vdebug<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-smi">vdebug</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">debug</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>log<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-smi">log</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">log</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>warn<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-smi">warn</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">warn</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">error</span>.<span class="pl-en">bind</span>(<span class="pl-en">console</span>);</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">default</span>:</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">console</span>.<span class="pl-c1">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unknown debugging option &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> d <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39; (supported: &#39;trace&#39;, &#39;debug&#39;, &#39;vdebug&#39;, &#39;log&#39;, warn&#39;, &#39;error&#39;)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Initializing library<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Helper method to enumerate devices</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">listDevices</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">			callback <span class="pl-k">=</span> (<span class="pl-k">typeof</span> callback <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> callback <span class="pl-k">:</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span>) {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span>.<span class="pl-en">getUserMedia</span>({ audio<span class="pl-k">:</span> <span class="pl-c1">true</span>, video<span class="pl-k">:</span> <span class="pl-c1">true</span> })</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">stream</span>) {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span>.<span class="pl-en">enumerateDevices</span>().<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">devices</span>) {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(devices);</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">callback</span>(devices);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Get rid of the now useless stream</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">stream</span>.<span class="pl-c1">stop</span>();</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">catch</span>(e) {}</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> tracks <span class="pl-k">=</span> <span class="pl-smi">stream</span>.<span class="pl-en">getTracks</span>();</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">in</span> tracks) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">var</span> mst <span class="pl-k">=</span> tracks[i];</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">if</span>(mst <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> mst <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">mst</span>.<span class="pl-c1">stop</span>();</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">catch</span>(e) {}</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">				})</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">catch</span>(<span class="pl-k">function</span>(<span class="pl-smi">err</span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(err);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">callback</span>([]);</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>navigator.mediaDevices unavailable<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>([]);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Helper methods to attach/reattach a stream to a video element (previously part of adapter.js)</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">attachMediaStream</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">stream</span>) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>chrome<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> chromever <span class="pl-k">=</span> <span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-c1">version</span>;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(chromever <span class="pl-k">&gt;=</span> <span class="pl-c1">43</span>) {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">element</span>.<span class="pl-smi">srcObject</span> <span class="pl-k">=</span> stream;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">element</span>.<span class="pl-smi">src</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">element</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-c1">URL</span>.<span class="pl-en">createObjectURL</span>(stream);</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Error attaching stream to element<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">element</span>.<span class="pl-smi">srcObject</span> <span class="pl-k">=</span> stream;</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">reattachMediaStream</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">to</span>, <span class="pl-smi">from</span>) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>chrome<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> chromever <span class="pl-k">=</span> <span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-c1">version</span>;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(chromever <span class="pl-k">&gt;=</span> <span class="pl-c1">43</span>) {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">to</span>.<span class="pl-smi">srcObject</span> <span class="pl-k">=</span> <span class="pl-smi">from</span>.<span class="pl-smi">srcObject</span>;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">to</span>.<span class="pl-smi">src</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">to</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-smi">from</span>.<span class="pl-smi">src</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">to</span>.<span class="pl-smi">srcObject</span> <span class="pl-k">=</span> <span class="pl-smi">from</span>.<span class="pl-smi">srcObject</span>;</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Detect tab close: make sure we don&#39;t loose existing onbeforeunload handlers</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> oldOBF <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">onbeforeunload</span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">window</span>.<span class="pl-en">onbeforeunload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Closing window<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> s <span class="pl-k">in</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span>) {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span>[s] <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span>[s] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span>[s].<span class="pl-smi">destroyOnUnload</span>) {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Destroying session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> s);</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span>[s].<span class="pl-en">destroy</span>({asyncRequest<span class="pl-k">:</span> <span class="pl-c1">false</span>});</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(oldOBF <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> oldOBF <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">oldOBF</span>();</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">addJsList</span>(<span class="pl-smi">srcArray</span>) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>srcArray <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-c1">Array</span>.<span class="pl-en">isArray</span>(srcArray) <span class="pl-k">||</span> <span class="pl-smi">srcArray</span>.<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">options</span>.<span class="pl-en">callback</span>();</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> count <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">addJs</span>(srcArray[count],next);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span> <span class="pl-en">next</span>() {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">				count<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (count<span class="pl-k">&lt;</span><span class="pl-smi">srcArray</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">addJs</span>(srcArray[count],next);</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">options</span>.<span class="pl-en">callback</span>();</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">addJs</span>(<span class="pl-smi">src</span>,<span class="pl-smi">done</span>) {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(src <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>jquery.min.js<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-c1">window</span>.<span class="pl-smi">jQuery</span>) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Already loaded</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(src <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> already loaded, skipping<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">done</span>();</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(src <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>adapter.js<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(adapter) {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Already loaded</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(src <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> already loaded, skipping<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">done</span>();</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">catch</span>(e) {};</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> oHead <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">item</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> oScript <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>script<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">oScript</span>.<span class="pl-c1">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>text/javascript<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">oScript</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> src;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">oScript</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Library <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> src <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> loaded<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">done</span>();</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">oHead</span>.<span class="pl-c1">appendChild</span>(oScript);</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-smi">initDone</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">addJsList</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>adapter.js<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>jquery.min.js<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Helper method to check whether WebRTC is supported by this browser</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Janus</span>.<span class="pl-en">isWebrtcSupported</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> <span class="pl-c1">window</span>.<span class="pl-smi">RTCPeerConnection</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">window</span>.<span class="pl-smi">RTCPeerConnection</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">navigator</span>.<span class="pl-smi">getUserMedia</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">navigator</span>.<span class="pl-smi">getUserMedia</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Helper method to create random identifiers (e.g., transaction)</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">len</span>) {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> charSet <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> randomString <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> randomPoz <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-smi">charSet</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">		randomString <span class="pl-k">+=</span> <span class="pl-smi">charSet</span>.<span class="pl-c1">substring</span>(randomPoz,randomPoz<span class="pl-k">+</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> randomString;</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Janus</span>(<span class="pl-smi">gatewayCallbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">Janus</span>.<span class="pl-smi">initDone</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Library not initialized<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> {};</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">Janus</span>.<span class="pl-en">isWebrtcSupported</span>()) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>WebRTC not supported by this browser<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> {};</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Library initialized: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">initDone</span>);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">	gatewayCallbacks <span class="pl-k">=</span> gatewayCallbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">destroyed</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">destroyed</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">destroyed</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">server</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">server</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid gateway url<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> {};</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> websockets <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> ws <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> wsHandlers <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> wsKeepaliveTimeoutId <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> servers <span class="pl-k">=</span> <span class="pl-c1">null</span>, serversIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> server <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">server</span>;</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(server)) {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Multiple servers provided (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">server</span>.<span class="pl-c1">length</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>), will use the first that works<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">		server <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">		servers <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">server</span>;</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(servers);</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">server</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ws<span class="pl-pds">&quot;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">			websockets <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Using WebSockets to contact Janus: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> server);</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">			websockets <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Using REST API to contact Janus: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> server);</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> iceServers <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">iceServers</span>;</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(iceServers <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> iceServers <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">		iceServers <span class="pl-k">=</span> [{urls<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>stun:stun.l.google.com:19302<span class="pl-pds">&quot;</span></span>}];</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> iceTransportPolicy <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">iceTransportPolicy</span>;</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Whether IPv6 candidates should be gathered</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> ipv6Support <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">ipv6</span>;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(ipv6Support <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> ipv6Support <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">		ipv6Support <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Whether we should enable the withCredentials flag for XHR requests</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> withCredentials <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">		withCredentials <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Optional max events</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> maxev <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">max_poll_events</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">max_poll_events</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">		maxev <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">max_poll_events</span>;</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(maxev <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">		maxev <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Token to use (only if the token based authentication mechanism is enabled)</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> token <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">token</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">token</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">		token <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">token</span>;</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> API secret to use (only if the shared API secret is enabled)</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> apisecret <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">apisecret</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">apisecret</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">		apisecret <span class="pl-k">=</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">apisecret</span>;</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Whether we should destroy this session when onbeforeunload is called</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">destroyOnUnload</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">destroyOnUnload</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">destroyOnUnload</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">destroyOnUnload</span> <span class="pl-k">=</span> (<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-smi">destroyOnUnload</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> connected <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> sessionId <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> pluginHandles <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> retries <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> transactions <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">createSession</span>(gatewayCallbacks);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Public methods</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-en">getServer</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> server; };</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-en">isConnected</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> connected; };</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-en">getSessionId</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> sessionId; };</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-en">destroy</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">destroySession</span>(callbacks); };</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-en">attach</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">createHandle</span>(callbacks); };</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">eventHandler</span>() {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(sessionId <span class="pl-k">==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Long poll...<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>connected) {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> longpoll <span class="pl-k">=</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>?rid=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(maxev <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> maxev <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">			longpoll <span class="pl-k">=</span> longpoll <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;maxev=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> maxev;</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">			longpoll <span class="pl-k">=</span> longpoll <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;token=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> token;</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">			longpoll <span class="pl-k">=</span> longpoll <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;apisecret=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">			type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>GET<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">			url<span class="pl-k">:</span> longpoll,</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">			xhrFields<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">				withCredentials<span class="pl-k">:</span> withCredentials</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">			cache<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">			timeout<span class="pl-k">:</span> <span class="pl-c1">60000</span>,	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">			success<span class="pl-k">:</span> handleEvent,</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">error</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XMLHttpRequest</span>, <span class="pl-smi">textStatus</span>, <span class="pl-smi">errorThrown</span>) {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">				retries<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(retries <span class="pl-k">&gt;</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Did we just lose the gateway? :-(</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">					connected <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Lost connection to the gateway (is it down?)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">eventHandler</span>();</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private event handler: this will trigger plugin callbacks, if set</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">handleEvent</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">		retries <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>websockets <span class="pl-k">&amp;&amp;</span> sessionId <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> sessionId <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">setTimeout</span>(eventHandler, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>websockets <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(json)) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> We got an array: it means we passed a maxev &gt; 1, iterate on all objects</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span><span class="pl-smi">json</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">handleEvent</span>(json[i]);</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>keepalive<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Nothing happened</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">vdebug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got a keepalive on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ack<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Just an ack, we can probably ignore</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got an ack on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> transaction <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(transaction <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> transaction <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> reportSuccess <span class="pl-k">=</span> transactions[transaction];</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(reportSuccess <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> reportSuccess <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">reportSuccess</span>(json);</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> transactions[transaction];</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Success!</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got a success on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> transaction <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(transaction <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> transaction <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> reportSuccess <span class="pl-k">=</span> transactions[transaction];</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(reportSuccess <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> reportSuccess <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">reportSuccess</span>(json);</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> transactions[transaction];</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>webrtcup<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> The PeerConnection with the gateway is up! Notify this</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got a webrtcup event on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sender <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>sender<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(sender <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> sender <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Missing sender...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[sender];</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>This handle is not attached to this session<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">webrtcState</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>hangup<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> A plugin asked the core to hangup a PeerConnection on one of our handles</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got a hangup event on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sender <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>sender<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(sender <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> sender <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Missing sender...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[sender];</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>This handle is not attached to this session<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">webrtcState</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">hangup</span>();</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>detached<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> A plugin asked the core to detach one of our handles</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got a detached event on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sender <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>sender<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(sender <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> sender <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Missing sender...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[sender];</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Don&#39;t warn here because destroyHandle causes this situation.</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">ondetached</span>();</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-c1">detach</span>();</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>media<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Media started/stopped flowing</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got a media event on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sender <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>sender<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(sender <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> sender <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Missing sender...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[sender];</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>This handle is not attached to this session<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">mediaState</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span>], json[<span class="pl-s"><span class="pl-pds">&quot;</span>receiving<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slowlink<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got a slowlink event on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Trouble uplink or downlink</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sender <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>sender<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(sender <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> sender <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Missing sender...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[sender];</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>This handle is not attached to this session<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">slowLink</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>uplink<span class="pl-pds">&quot;</span></span>], json[<span class="pl-s"><span class="pl-pds">&quot;</span>nacks<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Oops, something wrong happened</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> transaction <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(transaction <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> transaction <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> reportSuccess <span class="pl-k">=</span> transactions[transaction];</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(reportSuccess <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> reportSuccess <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">reportSuccess</span>(json);</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> transactions[transaction];</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>event<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Got a plugin event on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sender <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>sender<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(sender <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> sender <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Missing sender...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> plugindata <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>plugindata<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(plugindata <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> plugindata <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Missing plugindata...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>  -- Event is coming from <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sender <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> plugindata[<span class="pl-s"><span class="pl-pds">&quot;</span>plugin<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> data <span class="pl-k">=</span> plugindata[<span class="pl-s"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(data);</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[sender];</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>This handle is not attached to this session<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> jsep <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>jsep<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(jsep <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> jsep <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Handling SDP as well...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(jsep);</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> callback <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">onmessage</span>;</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(callback <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> callback <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Notifying application...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Send to callback specified when attaching plugin handle</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>(data, jsep);</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Send to generic callback (?)</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No provided notification callback<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unkown message/event  &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39; on session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private helper to send keep-alive messages on WebSockets</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">keepAlive</span>() {</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(server <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">!</span>websockets <span class="pl-k">||</span> <span class="pl-k">!</span>connected)</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">		wsKeepaliveTimeoutId <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(keepAlive, <span class="pl-c1">30000</span>);</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> request <span class="pl-k">=</span> { <span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>keepalive<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>session_id<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> sessionId, <span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span>(<span class="pl-c1">12</span>) };</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>token<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>apisecret<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">ws</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request));</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private method to create a session</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">createSession</span>(<span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> transaction <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span>(<span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> request <span class="pl-k">=</span> { <span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>create<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> transaction };</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>token<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>apisecret<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(server <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(servers)) {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> We still need to find a working server from the list we were given</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">			server <span class="pl-k">=</span> servers[serversIndex];</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">server</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ws<span class="pl-pds">&quot;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">				websockets <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Server #<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (serversIndex<span class="pl-k">+</span><span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: trying WebSockets to contact Janus (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">				websockets <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Server #<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (serversIndex<span class="pl-k">+</span><span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: trying REST API to contact Janus (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(websockets) {</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">			ws <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">WebSocket</span>(server, <span class="pl-s"><span class="pl-pds">&#39;</span>janus-protocol<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">			wsHandlers <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">error</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Error connecting to the Janus WebSockets server... <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> server);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(servers)) {</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">						serversIndex<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (serversIndex <span class="pl-k">==</span> <span class="pl-smi">servers</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> We tried all the servers the user gave us and they all failed</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Error connecting to any of the provided Janus servers: Is the gateway down?<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Let&#39;s try the next server</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">						server <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">createSession</span>(callbacks);</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">						}, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Error connecting to the Janus WebSockets server: Is the gateway down?<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">open</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> We need to be notified about the success</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">					transactions[transaction] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">						wsKeepaliveTimeoutId <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(keepAlive, <span class="pl-c1">30000</span>);</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">						connected <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">						sessionId <span class="pl-k">=</span> <span class="pl-smi">json</span>.<span class="pl-c1">data</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Created session: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span>[sessionId] <span class="pl-k">=</span> that;</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ws</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request));</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">message</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">handleEvent</span>(<span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-c1">event</span>.<span class="pl-c1">data</span>));</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">close</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (server <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">!</span>connected) {</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">					connected <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> FIXME What if this is called when the page is closed?</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Lost connection to the gateway (is it down?)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> eventName <span class="pl-k">in</span> wsHandlers) {</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ws</span>.<span class="pl-c1">addEventListener</span>(eventName, wsHandlers[eventName]);</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">			type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">			url<span class="pl-k">:</span> server,</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			xhrFields<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">				withCredentials<span class="pl-k">:</span> withCredentials</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">			cache<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">			contentType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>application/json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">			data<span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request),</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">				connected <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">				sessionId <span class="pl-k">=</span> <span class="pl-smi">json</span>.<span class="pl-c1">data</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Created session: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId);</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span>[sessionId] <span class="pl-k">=</span> that;</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">eventHandler</span>();</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">error</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XMLHttpRequest</span>, <span class="pl-smi">textStatus</span>, <span class="pl-smi">errorThrown</span>) {</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">$</span>.<span class="pl-en">isArray</span>(servers)) {</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">					serversIndex<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(serversIndex <span class="pl-k">==</span> <span class="pl-smi">servers</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> We tried all the servers the user gave us and they all failed</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Error connecting to any of the provided Janus servers: Is the gateway down?<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Let&#39;s try the next server</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">					server <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() { <span class="pl-en">createSession</span>(callbacks); }, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(errorThrown <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: Is the gateway down?<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">			dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private method to destroy a session</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">destroySession</span>(<span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> FIXME This method triggers a success even when we fail</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> asyncRequest <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">callbacks</span>.<span class="pl-smi">asyncRequest</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">asyncRequest</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">			asyncRequest <span class="pl-k">=</span> (<span class="pl-smi">callbacks</span>.<span class="pl-smi">asyncRequest</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Destroying session <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> (async=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> asyncRequest <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>connected) {</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(sessionId <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> sessionId <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No session to destroy<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">destroyed</span>();</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">delete</span> <span class="pl-smi">Janus</span>.<span class="pl-smi">sessions</span>[sessionId];</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Destroy all handles first</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span>(<span class="pl-k">var</span> ph <span class="pl-k">in</span> pluginHandles) {</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> phv <span class="pl-k">=</span> pluginHandles[ph];</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Destroying handle <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">phv</span>.<span class="pl-c1">id</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">phv</span>.<span class="pl-smi">plugin</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">destroyHandle</span>(<span class="pl-smi">phv</span>.<span class="pl-c1">id</span>, {asyncRequest<span class="pl-k">:</span> asyncRequest});</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Ok, go on</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> request <span class="pl-k">=</span> { <span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>destroy<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span>(<span class="pl-c1">12</span>) };</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>token<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>apisecret<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(websockets) {</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>session_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> sessionId;</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-en">unbindWebSocket</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span>(<span class="pl-k">var</span> eventName <span class="pl-k">in</span> wsHandlers) {</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ws</span>.<span class="pl-c1">removeEventListener</span>(eventName, wsHandlers[eventName]);</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ws</span>.<span class="pl-c1">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>message<span class="pl-pds">&#39;</span></span>, onUnbindMessage);</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ws</span>.<span class="pl-c1">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, onUnbindError);</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(wsKeepaliveTimeoutId) {</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">clearTimeout</span>(wsKeepaliveTimeoutId);</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-en">onUnbindMessage</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>){</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-c1">event</span>.<span class="pl-c1">data</span>);</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">data</span>.<span class="pl-smi">session_id</span> <span class="pl-k">==</span> <span class="pl-smi">request</span>.<span class="pl-smi">session_id</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">data</span>.<span class="pl-smi">transaction</span> <span class="pl-k">==</span> <span class="pl-smi">request</span>.<span class="pl-smi">transaction</span>) {</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">unbindWebSocket</span>();</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">destroyed</span>();</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-en">onUnbindError</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">unbindWebSocket</span>();</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Failed to destroy the gateway: Is the gateway down?<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">destroyed</span>();</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ws</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>message<span class="pl-pds">&#39;</span></span>, onUnbindMessage);</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ws</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>, onUnbindError);</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ws</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request));</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">			type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">			url<span class="pl-k">:</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId,</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">			async<span class="pl-k">:</span> asyncRequest,	<span class="pl-c"><span class="pl-c">//</span> Sometimes we need false here, or destroying in onbeforeunload won&#39;t work</span></td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">			xhrFields<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">				withCredentials<span class="pl-k">:</span> withCredentials</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">			cache<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">			contentType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>application/json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">			data<span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request),</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Destroyed session:<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">				sessionId <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">				connected <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">destroyed</span>();</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">error</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XMLHttpRequest</span>, <span class="pl-smi">textStatus</span>, <span class="pl-smi">errorThrown</span>) {</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Reset everything anyway</span></td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">				sessionId <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">				connected <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">gatewayCallbacks</span>.<span class="pl-en">destroyed</span>();</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">			dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private method to create a plugin handle</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">createHandle</span>(<span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">consentDialog</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">consentDialog</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">consentDialog</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">mediaState</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">mediaState</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">mediaState</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">webrtcState</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">webrtcState</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">webrtcState</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">slowLink</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">slowLink</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">slowLink</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">onmessage</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onmessage</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onmessage</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">onlocalstream</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onlocalstream</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onlocalstream</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">onremotestream</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onremotestream</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onremotestream</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">ondata</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondata</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondata</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">ondataopen</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondataopen</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondataopen</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">oncleanup</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">oncleanup</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">oncleanup</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">ondetached</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondetached</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondetached</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>connected) {</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> plugin <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">plugin</span>;</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(plugin <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> plugin <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid plugin<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid plugin<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> opaqueId <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">opaqueId</span>;</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> transaction <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span>(<span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> request <span class="pl-k">=</span> { <span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>attach<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>plugin<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> plugin, <span class="pl-s"><span class="pl-pds">&quot;</span>opaque_id<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> opaqueId, <span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> transaction };</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>token<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>apisecret<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(websockets) {</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">			transactions[transaction] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> handleId <span class="pl-k">=</span> <span class="pl-smi">json</span>.<span class="pl-c1">data</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Created handle: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId);</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">					{</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">						session <span class="pl-k">:</span> that,</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">						plugin <span class="pl-k">:</span> plugin,</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">						id <span class="pl-k">:</span> handleId,</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">						webrtcStuff <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">							started <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">							myStream <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">							streamExternal <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">							remoteStream <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">							mySdp <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">							pc <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">							dataChannel <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">							dtmfSender <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">							trickle <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">							iceDone <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">							sdpSent <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">							volume <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">								value <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">								timer <span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">							},</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">							bitrate <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">								value <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">								bsnow <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">								bsbefore <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">								tsnow <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">								tsbefore <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">								timer <span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">						},</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">getId</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> handleId; },</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">getPlugin</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> plugin; },</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">getVolume</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">getVolume</span>(handleId); },</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">isAudioMuted</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">isMuted</span>(handleId, <span class="pl-c1">false</span>); },</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">muteAudio</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">mute</span>(handleId, <span class="pl-c1">false</span>, <span class="pl-c1">true</span>); },</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">unmuteAudio</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">mute</span>(handleId, <span class="pl-c1">false</span>, <span class="pl-c1">false</span>); },</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">isVideoMuted</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">isMuted</span>(handleId, <span class="pl-c1">true</span>); },</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">muteVideo</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">mute</span>(handleId, <span class="pl-c1">true</span>, <span class="pl-c1">true</span>); },</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">unmuteVideo</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">mute</span>(handleId, <span class="pl-c1">true</span>, <span class="pl-c1">false</span>); },</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">getBitrate</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">getBitrate</span>(handleId); },</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">send</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">sendMessage</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">data</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">sendData</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">dtmf</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">sendDtmf</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">						consentDialog <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">consentDialog</span>,</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">						mediaState <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">mediaState</span>,</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">						webrtcState <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">webrtcState</span>,</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">						slowLink <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">slowLink</span>,</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">						onmessage <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onmessage</span>,</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">createOffer</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">prepareWebrtc</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">createAnswer</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">prepareWebrtc</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">handleRemoteJsep</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">prepareWebrtcPeer</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">						onlocalstream <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onlocalstream</span>,</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">						onremotestream <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onremotestream</span>,</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">						ondata <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondata</span>,</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">						ondataopen <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondataopen</span>,</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">						oncleanup <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">oncleanup</span>,</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">						ondetached <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondetached</span>,</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">hangup</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">sendRequest</span>) { <span class="pl-en">cleanupWebrtc</span>(handleId, sendRequest <span class="pl-k">===</span> <span class="pl-c1">true</span>); },</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">detach</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">destroyHandle</span>(handleId, callbacks); }</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">				pluginHandles[handleId] <span class="pl-k">=</span> pluginHandle;</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>(pluginHandle);</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>session_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> sessionId;</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ws</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request));</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">			type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">			url<span class="pl-k">:</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId,</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">			xhrFields<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">				withCredentials<span class="pl-k">:</span> withCredentials</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">			cache<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">			contentType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>application/json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">			data<span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request),</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> handleId <span class="pl-k">=</span> <span class="pl-smi">json</span>.<span class="pl-c1">data</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Created handle: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId);</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">					{</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">						session <span class="pl-k">:</span> that,</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">						plugin <span class="pl-k">:</span> plugin,</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">						id <span class="pl-k">:</span> handleId,</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">						webrtcStuff <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">							started <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">							myStream <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">							streamExternal <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">							remoteStream <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">							mySdp <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">							pc <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">							dataChannel <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">							dtmfSender <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">							trickle <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">							iceDone <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">							sdpSent <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">							volume <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">								value <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">								timer <span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">							},</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">							bitrate <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">								value <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">								bsnow <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">								bsbefore <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">								tsnow <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">								tsbefore <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">								timer <span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">						},</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">getId</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> handleId; },</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">getPlugin</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> plugin; },</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">getVolume</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">getVolume</span>(handleId); },</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">isAudioMuted</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">isMuted</span>(handleId, <span class="pl-c1">false</span>); },</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">muteAudio</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">mute</span>(handleId, <span class="pl-c1">false</span>, <span class="pl-c1">true</span>); },</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">unmuteAudio</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">mute</span>(handleId, <span class="pl-c1">false</span>, <span class="pl-c1">false</span>); },</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">isVideoMuted</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">isMuted</span>(handleId, <span class="pl-c1">true</span>); },</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">muteVideo</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">mute</span>(handleId, <span class="pl-c1">true</span>, <span class="pl-c1">true</span>); },</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">unmuteVideo</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">mute</span>(handleId, <span class="pl-c1">true</span>, <span class="pl-c1">false</span>); },</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">getBitrate</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-en">getBitrate</span>(handleId); },</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">send</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">sendMessage</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">data</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">sendData</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">dtmf</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">sendDtmf</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">						consentDialog <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">consentDialog</span>,</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">						mediaState <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">mediaState</span>,</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">						webrtcState <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">webrtcState</span>,</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">						slowLink <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">slowLink</span>,</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">						onmessage <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onmessage</span>,</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">createOffer</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">prepareWebrtc</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">createAnswer</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">prepareWebrtc</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">handleRemoteJsep</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">prepareWebrtcPeer</span>(handleId, callbacks); },</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">						onlocalstream <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onlocalstream</span>,</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">						onremotestream <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">onremotestream</span>,</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">						ondata <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondata</span>,</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">						ondataopen <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondataopen</span>,</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">						oncleanup <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">oncleanup</span>,</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">						ondetached <span class="pl-k">:</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">ondetached</span>,</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">hangup</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">sendRequest</span>) { <span class="pl-en">cleanupWebrtc</span>(handleId, sendRequest <span class="pl-k">===</span> <span class="pl-c1">true</span>); },</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">detach</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbacks</span>) { <span class="pl-en">destroyHandle</span>(handleId, callbacks); }</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">				pluginHandles[handleId] <span class="pl-k">=</span> pluginHandle;</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>(pluginHandle);</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">error</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XMLHttpRequest</span>, <span class="pl-smi">textStatus</span>, <span class="pl-smi">errorThrown</span>) {</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">			dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private method to send a message</span></td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">sendMessage</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>connected) {</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> message <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">message</span>;</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> jsep <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">jsep</span>;</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> transaction <span class="pl-k">=</span> <span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span>(<span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> request <span class="pl-k">=</span> { <span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>message<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> message, <span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> transaction };</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>token<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>apisecret<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(jsep <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> jsep <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">request</span>.<span class="pl-smi">jsep</span> <span class="pl-k">=</span> jsep;</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sending message to plugin (handle=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>):<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(request);</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(websockets) {</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>session_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> sessionId;</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>handle_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> handleId;</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">			transactions[transaction] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Message sent!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> We got a success, must have been a synchronous transaction</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> plugindata <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>plugindata<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(plugindata <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> plugindata <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Request succeeded, but missing plugindata...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Synchronous transaction successful (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> plugindata[<span class="pl-s"><span class="pl-pds">&quot;</span>plugin<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> data <span class="pl-k">=</span> plugindata[<span class="pl-s"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(data);</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>(data);</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ack<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Not a success and not an ack, must be an error</span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unknown error<span class="pl-pds">&quot;</span></span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unknown error<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> If we got here, the plugin decided to handle the request asynchronously</span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ws</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request));</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">			type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">			url<span class="pl-k">:</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId,</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">			xhrFields<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">				withCredentials<span class="pl-k">:</span> withCredentials</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">			cache<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">			contentType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>application/json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">			data<span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request),</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Message sent!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> We got a success, must have been a synchronous transaction</span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> plugindata <span class="pl-k">=</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>plugindata<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(plugindata <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> plugindata <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Request succeeded, but missing plugindata...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Synchronous transaction successful (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> plugindata[<span class="pl-s"><span class="pl-pds">&quot;</span>plugin<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> data <span class="pl-k">=</span> plugindata[<span class="pl-s"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(data);</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>(data);</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ack<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Not a success and not an ack, must be an error</span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unknown error<span class="pl-pds">&quot;</span></span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unknown error<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> If we got here, the plugin decided to handle the request asynchronously</span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">error</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XMLHttpRequest</span>, <span class="pl-smi">textStatus</span>, <span class="pl-smi">errorThrown</span>) {</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">			dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private method to send a trickle candidate</span></td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">sendTrickleCandidate</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">candidate</span>) {</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>connected) {</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> request <span class="pl-k">=</span> { <span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>trickle<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>candidate<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> candidate, <span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span>(<span class="pl-c1">12</span>) };</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>token<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>apisecret<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">vdebug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sending trickle candidate (handle=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>):<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">vdebug</span>(request);</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(websockets) {</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>session_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> sessionId;</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>handle_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> handleId;</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ws</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request));</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">			type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">			url<span class="pl-k">:</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId,</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">			xhrFields<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">				withCredentials<span class="pl-k">:</span> withCredentials</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">			cache<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">			contentType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>application/json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">			data<span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request),</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">vdebug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Candidate sent!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">vdebug</span>(json);</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ack<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">error</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XMLHttpRequest</span>, <span class="pl-smi">textStatus</span>, <span class="pl-smi">errorThrown</span>) {</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">			dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private method to send a data channel message</span></td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">sendData</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> text <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-c1">text</span>;</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(text <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> text <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid text<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid text<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sending string on data channel: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> text);</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span>.<span class="pl-c1">send</span>(text);</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private method to send a DTMF tone</span></td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">sendDtmf</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">dtmfSender</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">dtmfSender</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Create the DTMF sender, if possible</span></td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> tracks <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>();</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(tracks <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> tracks <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">tracks</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> local_audio_track <span class="pl-k">=</span> tracks[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">dtmfSender</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">createDTMFSender</span>(local_audio_track);</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Created DTMF Sender<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">dtmfSender</span>.<span class="pl-en">ontonechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">tone</span>) { <span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sent DTMF tone: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">tone</span>.<span class="pl-smi">tone</span>); };</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">dtmfSender</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">dtmfSender</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid DTMF configuration<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid DTMF configuration<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> dtmf <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">dtmf</span>;</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(dtmf <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> dtmf <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid DTMF parameters<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid DTMF parameters<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> tones <span class="pl-k">=</span> <span class="pl-smi">dtmf</span>.<span class="pl-smi">tones</span>;</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(tones <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> tones <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid DTMF string<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid DTMF string<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> duration <span class="pl-k">=</span> <span class="pl-smi">dtmf</span>.<span class="pl-smi">duration</span>;</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(duration <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> duration <span class="pl-k">===</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">			duration <span class="pl-k">=</span> <span class="pl-c1">500</span>;	<span class="pl-c"><span class="pl-c">//</span> We choose 500ms as the default duration for a tone</span></td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> gap <span class="pl-k">=</span> <span class="pl-smi">dtmf</span>.<span class="pl-smi">gap</span>;</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(gap <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> gap <span class="pl-k">===</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">			gap <span class="pl-k">=</span> <span class="pl-c1">50</span>;	<span class="pl-c"><span class="pl-c">//</span> We choose 50ms as the default gap between tones</span></td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sending DTMF string <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> tones <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> (duration <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> duration <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ms, gap <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> gap <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ms)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">dtmfSender</span>.<span class="pl-en">insertDTMF</span>(tones, duration, gap);</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Private method to destroy a plugin handle</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">destroyHandle</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(callbacks);</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> asyncRequest <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">callbacks</span>.<span class="pl-smi">asyncRequest</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">asyncRequest</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">			asyncRequest <span class="pl-k">=</span> (<span class="pl-smi">callbacks</span>.<span class="pl-smi">asyncRequest</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Destroying handle <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> (async=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> asyncRequest <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">cleanupWebrtc</span>(handleId);</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>connected) {</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Is the gateway down? (connected=false)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> request <span class="pl-k">=</span> { <span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>detach<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span>(<span class="pl-c1">12</span>) };</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>token<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>apisecret<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(websockets) {</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>session_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> sessionId;</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">			request[<span class="pl-s"><span class="pl-pds">&quot;</span>handle_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> handleId;</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ws</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request));</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">			type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">			url<span class="pl-k">:</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId,</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">			async<span class="pl-k">:</span> asyncRequest,	<span class="pl-c"><span class="pl-c">//</span> Sometimes we need false here, or destroying in onbeforeunload won&#39;t work</span></td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">			xhrFields<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">				withCredentials<span class="pl-k">:</span> withCredentials</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">			cache<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">			contentType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>application/json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">			data<span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request),</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">json</span>) {</td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Destroyed handle:<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(json);</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(json[<span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>success<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Ooops: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">code</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> json[<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>].<span class="pl-smi">reason</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">error</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">XMLHttpRequest</span>, <span class="pl-smi">textStatus</span>, <span class="pl-smi">errorThrown</span>) {</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(textStatus <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> errorThrown);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> We cleanup anyway</span></td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">delete</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">			dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> WebRTC stuff</span></td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">streamsDone</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">jsep</span>, <span class="pl-smi">media</span>, <span class="pl-smi">callbacks</span>, <span class="pl-smi">stream</span>) {</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>streamsDone:<span class="pl-pds">&quot;</span></span>, stream);</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">=</span> stream;</td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pc_config <span class="pl-k">=</span> {<span class="pl-s"><span class="pl-pds">&quot;</span>iceServers<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> iceServers, <span class="pl-s"><span class="pl-pds">&quot;</span>iceTransportPolicy<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> iceTransportPolicy};</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>~ var pc_constraints = {&#39;mandatory&#39;: {&#39;MozDontOfferDataChannel&#39;:true}};</span></td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pc_constraints <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>optional<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&quot;</span>DtlsSrtpKeyAgreement<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">true</span>}]</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(ipv6Support <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> FIXME This is only supported in Chrome right now</span></td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> For support in Firefox track this: https://bugzilla.mozilla.org/show_bug.cgi?id=797262</span></td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pc_constraints</span>.<span class="pl-smi">optional</span>.<span class="pl-c1">push</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>googIPv6<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>});</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>edge<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> This is Edge, enable BUNDLE explicitly</span></td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pc_config</span>.<span class="pl-smi">bundlePolicy</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>max-bundle<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Creating PeerConnection<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(pc_constraints);</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RTCPeerConnection</span>(pc_config, pc_constraints);</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>);</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-smi">getStats</span>) {	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>0 kbits/sec<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Preparing local SDP and gathering candidates (trickle=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">config</span>.<span class="pl-smi">trickle</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">onicecandidate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">candidate</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">					(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>edge<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">event</span>.<span class="pl-smi">candidate</span>.<span class="pl-smi">candidate</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>endOfCandidates<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)) {</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>End of candidates.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">config</span>.<span class="pl-smi">iceDone</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">trickle</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Notify end of candidates</span></td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">sendTrickleCandidate</span>(handleId, {<span class="pl-s"><span class="pl-pds">&quot;</span>completed<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">true</span>});</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> No trickle, time to send the complete SDP (including all candidates)</span></td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">sendSDP</span>(handleId, callbacks);</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> JSON.stringify doesn&#39;t work on some WebRTC objects anymore</span></td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> See https://code.google.com/p/chromium/issues/detail?id=467366</span></td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> candidate <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>candidate<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">event</span>.<span class="pl-smi">candidate</span>.<span class="pl-smi">candidate</span>,</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>sdpMid<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">event</span>.<span class="pl-smi">candidate</span>.<span class="pl-smi">sdpMid</span>,</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>sdpMLineIndex<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">event</span>.<span class="pl-smi">candidate</span>.<span class="pl-smi">sdpMLineIndex</span></td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">trickle</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Send candidate</span></td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">sendTrickleCandidate</span>(handleId, candidate);</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(stream <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> stream <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Adding local stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">addStream</span>(stream);</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">onlocalstream</span>(stream);</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">onaddstream</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">remoteStream</span>) {</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Handling Remote Stream<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(remoteStream);</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span> <span class="pl-k">=</span> remoteStream;</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">onremotestream</span>(<span class="pl-smi">remoteStream</span>.<span class="pl-smi">stream</span>);</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Any data channel to create?</span></td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-en">isDataEnabled</span>(media)) {</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Creating data channel<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-en">onDataChannelMessage</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Received message on data channel: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">event</span>.<span class="pl-c1">data</span>);</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-en">ondata</span>(<span class="pl-c1">event</span>.<span class="pl-c1">data</span>);	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-en">onDataChannelStateChange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> dcState <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span>.<span class="pl-c1">readyState</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>State change on data channel: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> dcState);</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(dcState <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">pluginHandle</span>.<span class="pl-en">ondataopen</span>();	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-en">onDataChannelError</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Got error on data channel:<span class="pl-pds">&#39;</span></span>, error);</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> TODO</span></td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Until we implement the proxying of open requests within the Janus core, we open a channel ourselves whatever the case</span></td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">createDataChannel</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>JanusDataChannel<span class="pl-pds">&quot;</span></span>, {ordered<span class="pl-k">:</span><span class="pl-c1">false</span>});	<span class="pl-c"><span class="pl-c">//</span> FIXME Add options (ordered, maxRetransmits, etc.)</span></td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span>.<span class="pl-smi">onmessage</span> <span class="pl-k">=</span> onDataChannelMessage;</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span>.<span class="pl-smi">onopen</span> <span class="pl-k">=</span> onDataChannelStateChange;</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span>.<span class="pl-smi">onclose</span> <span class="pl-k">=</span> onDataChannelStateChange;</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span>.<span class="pl-smi">onerror</span> <span class="pl-k">=</span> onDataChannelError;</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Create offer/answer now</span></td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(jsep <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> jsep <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">createOffer</span>(handleId, media, callbacks);</td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>edge<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> This is Edge, add an a=end-of-candidates at the end</span></td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">jsep</span>.<span class="pl-smi">sdp</span> <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>a=end-of-candidates<span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">setRemoteDescription</span>(</td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">new</span> <span class="pl-en">RTCSessionDescription</span>(jsep),</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Remote description accepted!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">createAnswer</span>(handleId, media, callbacks);</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">					}, <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span>);</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">prepareWebrtc</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> webrtcError;</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> jsep <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">jsep</span>;</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> media <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-c1">media</span>;</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Are we updating a session?</span></td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Updating existing media session<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Create offer/answer now</span></td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(jsep <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> jsep <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">createOffer</span>(handleId, media, callbacks);</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>edge<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> This is Edge, add an a=end-of-candidates at the end</span></td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">jsep</span>.<span class="pl-smi">sdp</span> <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>a=end-of-candidates<span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">setRemoteDescription</span>(</td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">new</span> <span class="pl-en">RTCSessionDescription</span>(jsep),</td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Remote description accepted!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">createAnswer</span>(handleId, media, callbacks);</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">						}, <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span>);</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Was a MediaStream object passed, or do we need to take care of that?</span></td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">callbacks</span>.<span class="pl-smi">stream</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">stream</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> stream <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">stream</span>;</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>MediaStream provided by the application<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(stream);</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Skip the getUserMedia part</span></td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">streamExternal</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">streamsDone</span>(handleId, jsep, media, callbacks, stream);</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">trickle</span> <span class="pl-k">=</span> <span class="pl-en">isTrickleEnabled</span>(<span class="pl-smi">callbacks</span>.<span class="pl-smi">trickle</span>);</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-en">isAudioSendEnabled</span>(media) <span class="pl-k">||</span> <span class="pl-en">isVideoSendEnabled</span>(media)) {</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> constraints <span class="pl-k">=</span> { mandatory<span class="pl-k">:</span> {}, optional<span class="pl-k">:</span> []};</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> audioSupport <span class="pl-k">=</span> <span class="pl-en">isAudioSendEnabled</span>(media);</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(audioSupport <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">&amp;&amp;</span> media <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> media <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">media</span>.<span class="pl-smi">audio</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">					audioSupport <span class="pl-k">=</span> <span class="pl-smi">media</span>.<span class="pl-smi">audio</span>;</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> videoSupport <span class="pl-k">=</span> <span class="pl-en">isVideoSendEnabled</span>(media);</td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(videoSupport <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">&amp;&amp;</span> media <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> media <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>screen<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>window<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> height <span class="pl-k">=</span> <span class="pl-c1">0</span>, maxHeight <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>lowres<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Small resolution, 4:3</span></td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">						height <span class="pl-k">=</span> <span class="pl-c1">240</span>;</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">						maxHeight <span class="pl-k">=</span> <span class="pl-c1">240</span>;</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">						width <span class="pl-k">=</span> <span class="pl-c1">320</span>;</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>lowres-16:9<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Small resolution, 16:9</span></td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">						height <span class="pl-k">=</span> <span class="pl-c1">180</span>;</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">						maxHeight <span class="pl-k">=</span> <span class="pl-c1">180</span>;</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">						width <span class="pl-k">=</span> <span class="pl-c1">320</span>;</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hires<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hires-16:9<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> High resolution is only 16:9</span></td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">						height <span class="pl-k">=</span> <span class="pl-c1">720</span>;</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">						maxHeight <span class="pl-k">=</span> <span class="pl-c1">720</span>;</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">						width <span class="pl-k">=</span> <span class="pl-c1">1280</span>;</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-c1">navigator</span>.<span class="pl-smi">mozGetUserMedia</span>) {</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> firefoxVer <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Firefox<span class="pl-cce">\/</span>(<span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>)[<span class="pl-c1">1</span>], <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span>(firefoxVer <span class="pl-k">&lt;</span> <span class="pl-c1">38</span>) {</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">								<span class="pl-c"><span class="pl-c">//</span> Unless this is and old Firefox, which doesn&#39;t support it</span></td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> unsupported, falling back to stdres (old Firefox)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">								height <span class="pl-k">=</span> <span class="pl-c1">480</span>;</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">								maxHeight <span class="pl-k">=</span> <span class="pl-c1">480</span>;</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">								width  <span class="pl-k">=</span> <span class="pl-c1">640</span>;</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>stdres<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Normal resolution, 4:3</span></td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">						height <span class="pl-k">=</span> <span class="pl-c1">480</span>;</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">						maxHeight <span class="pl-k">=</span> <span class="pl-c1">480</span>;</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">						width  <span class="pl-k">=</span> <span class="pl-c1">640</span>;</td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>stdres-16:9<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Normal resolution, 16:9</span></td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">						height <span class="pl-k">=</span> <span class="pl-c1">360</span>;</td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">						maxHeight <span class="pl-k">=</span> <span class="pl-c1">360</span>;</td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">						width <span class="pl-k">=</span> <span class="pl-c1">640</span>;</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Default video setting (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>) is stdres 4:3<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">						height <span class="pl-k">=</span> <span class="pl-c1">480</span>;</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">						maxHeight <span class="pl-k">=</span> <span class="pl-c1">480</span>;</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">						width <span class="pl-k">=</span> <span class="pl-c1">640</span>;</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Adding media constraint <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span>);</td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-c1">navigator</span>.<span class="pl-smi">mozGetUserMedia</span>) {</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> firefoxVer <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Firefox<span class="pl-cce">\/</span>(<span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>)[<span class="pl-c1">1</span>], <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(firefoxVer <span class="pl-k">&lt;</span> <span class="pl-c1">38</span>) {</td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">							videoSupport <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>require<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">&#39;</span>max<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> maxHeight, <span class="pl-s"><span class="pl-pds">&#39;</span>min<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> height},</td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>  {<span class="pl-s"><span class="pl-pds">&#39;</span>max<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> width,  <span class="pl-s"><span class="pl-pds">&#39;</span>min<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> width}</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">							};</td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> http://stackoverflow.com/questions/28282385/webrtc-firefox-constraints/28911694#28911694</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> https://github.com/meetecho/janus-gateway/pull/246</span></td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">							videoSupport <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">&#39;</span>ideal<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> height},</td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>  {<span class="pl-s"><span class="pl-pds">&#39;</span>ideal<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> width}</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">							};</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">						videoSupport <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">						    <span class="pl-s"><span class="pl-pds">&#39;</span>mandatory<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">						        <span class="pl-s"><span class="pl-pds">&#39;</span>maxHeight<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> maxHeight,</td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">						        <span class="pl-s"><span class="pl-pds">&#39;</span>minHeight<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> height,</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">						        <span class="pl-s"><span class="pl-pds">&#39;</span>maxWidth<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>  width,</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">						        <span class="pl-s"><span class="pl-pds">&#39;</span>minWidth<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>  width</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">						    },</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">						    <span class="pl-s"><span class="pl-pds">&#39;</span>optional<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> []</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">						};</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">						videoSupport <span class="pl-k">=</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span>;</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(videoSupport);</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>screen<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>window<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Not a webcam, but screen capture</span></td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">protocol</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https:<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> Screen sharing mandates HTTPS</span></td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Screen sharing only works on HTTPS, try the https:// version of this page<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Screen sharing only works on HTTPS, try the https:// version of this page<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> We&#39;re going to try and use the extension for Chrome 34+, the old approach</span></td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> for older versions of Chrome, or the experimental support in Firefox 33+</span></td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> cache <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">function</span> <span class="pl-en">callbackUserMedia</span> (<span class="pl-smi">error</span>, <span class="pl-smi">stream</span>) {</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(error) {</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>({code<span class="pl-k">:</span> <span class="pl-smi">error</span>.<span class="pl-c1">code</span>, name<span class="pl-k">:</span> <span class="pl-smi">error</span>.<span class="pl-c1">name</span>, message<span class="pl-k">:</span> <span class="pl-smi">error</span>.<span class="pl-smi">message</span>});</td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">streamsDone</span>(handleId, jsep, media, callbacks, stream);</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">function</span> <span class="pl-en">getScreenMedia</span>(<span class="pl-smi">constraints</span>, <span class="pl-smi">gsmCallback</span>) {</td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Adding media constraint (screen capture)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(constraints);</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span>.<span class="pl-en">getUserMedia</span>(constraints)</td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">							.<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">stream</span>) { <span class="pl-en">gsmCallback</span>(<span class="pl-c1">null</span>, stream); })</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">							.<span class="pl-en">catch</span>(<span class="pl-k">function</span>(<span class="pl-smi">error</span>) { <span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>); <span class="pl-en">gsmCallback</span>(error); });</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>chrome<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> chromever <span class="pl-k">=</span> <span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-c1">version</span>;</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> maxver <span class="pl-k">=</span> <span class="pl-c1">33</span>;</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Linux<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">							maxver <span class="pl-k">=</span> <span class="pl-c1">35</span>;	<span class="pl-c"><span class="pl-c">//</span> &quot;known&quot; crash in chrome 34 and 35 on linux</span></td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(chromever <span class="pl-k">&gt;=</span> <span class="pl-c1">26</span> <span class="pl-k">&amp;&amp;</span> chromever <span class="pl-k">&lt;=</span> maxver) {</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> Chrome 26-&gt;33 requires some awkward chrome://flags manipulation</span></td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">							constraints <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">								video<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">									mandatory<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">										googLeakyBucket<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">										maxWidth<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-smi">screen</span>.<span class="pl-c1">width</span>,</td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">										maxHeight<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-smi">screen</span>.<span class="pl-c1">height</span>,</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">										maxFrameRate<span class="pl-k">:</span> <span class="pl-c1">3</span>,</td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">										chromeMediaSource<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>screen<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">									}</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">								},</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">								audio<span class="pl-k">:</span> <span class="pl-en">isAudioSendEnabled</span>(media)</td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">							};</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">getScreenMedia</span>(constraints, callbackUserMedia);</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> Chrome 34+ requires an extension</span></td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> pending <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-en">setTimeout</span>(</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">									error <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>NavigatorUserMediaError<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">error</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>The required Chrome extension is not installed: click &lt;a href=&quot;#&quot;&gt;here&lt;/a&gt; to install it. (NOTE: this will need you to refresh the page)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">return</span> <span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(error);</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">								}, <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">							cache[pending] <span class="pl-k">=</span> [callbackUserMedia, <span class="pl-c1">null</span>];</td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">							<span class="pl-c1">window</span>.<span class="pl-c1">postMessage</span>({ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>janusGetScreen<span class="pl-pds">&#39;</span></span>, id<span class="pl-k">:</span> pending }, <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Firefox<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> ffver <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Firefox<span class="pl-cce">\/</span>(<span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>)[<span class="pl-c1">1</span>], <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(ffver <span class="pl-k">&gt;=</span> <span class="pl-c1">33</span>) {</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> Firefox 33+ has experimental support for screen sharing</span></td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">							constraints <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">								video<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">									mozMediaSource<span class="pl-k">:</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span>,</td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">									mediaSource<span class="pl-k">:</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span></td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">								},</td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">								audio<span class="pl-k">:</span> <span class="pl-en">isAudioSendEnabled</span>(media)</td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">							};</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">getScreenMedia</span>(constraints, <span class="pl-k">function</span> (<span class="pl-smi">err</span>, <span class="pl-smi">stream</span>) {</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">								<span class="pl-en">callbackUserMedia</span>(err, stream);</td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">								<span class="pl-c"><span class="pl-c">//</span> Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1045810</span></td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">if</span> (<span class="pl-k">!</span>err) {</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">var</span> lastTime <span class="pl-k">=</span> <span class="pl-smi">stream</span>.<span class="pl-smi">currentTime</span>;</td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">var</span> polly <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-en">setInterval</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">if</span>(<span class="pl-k">!</span>stream)</td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">											<span class="pl-c1">window</span>.<span class="pl-en">clearInterval</span>(polly);</td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">if</span>(<span class="pl-smi">stream</span>.<span class="pl-smi">currentTime</span> <span class="pl-k">==</span> lastTime) {</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">											<span class="pl-c1">window</span>.<span class="pl-en">clearInterval</span>(polly);</td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">											<span class="pl-k">if</span>(<span class="pl-smi">stream</span>.<span class="pl-smi">onended</span>) {</td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">												<span class="pl-smi">stream</span>.<span class="pl-en">onended</span>();</td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">											}</td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">										}</td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">										lastTime <span class="pl-k">=</span> <span class="pl-smi">stream</span>.<span class="pl-smi">currentTime</span>;</td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line">									}, <span class="pl-c1">500</span>);</td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">							});</td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> error <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>NavigatorUserMediaError<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">error</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Your version of Firefox does not support screen sharing, please install Firefox 33 (or more recent versions)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(error);</td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Wait for events from the Chrome Extension</span></td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">window</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>message<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-c1">event</span>.<span class="pl-smi">origin</span> <span class="pl-k">!=</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>)</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-c1">event</span>.<span class="pl-c1">data</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>janusGotScreen<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> cache[<span class="pl-c1">event</span>.<span class="pl-c1">data</span>.<span class="pl-c1">id</span>]) {</td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> data <span class="pl-k">=</span> cache[<span class="pl-c1">event</span>.<span class="pl-c1">data</span>.<span class="pl-c1">id</span>];</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> callback <span class="pl-k">=</span> data[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">delete</span> cache[<span class="pl-c1">event</span>.<span class="pl-c1">data</span>.<span class="pl-c1">id</span>];</td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-c1">data</span>.<span class="pl-smi">sourceId</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">								<span class="pl-c"><span class="pl-c">//</span> user canceled</span></td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">var</span> error <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>NavigatorUserMediaError<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">error</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>You cancelled the request for permission, giving up...<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(error);</td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code blob-code-inner js-file-line">							} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code blob-code-inner js-file-line">								constraints <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code blob-code-inner js-file-line">									audio<span class="pl-k">:</span> <span class="pl-en">isAudioSendEnabled</span>(media),</td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code blob-code-inner js-file-line">									video<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">										mandatory<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">											chromeMediaSource<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>desktop<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">											maxWidth<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-smi">screen</span>.<span class="pl-c1">width</span>,</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">											maxHeight<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-smi">screen</span>.<span class="pl-c1">height</span>,</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">											maxFrameRate<span class="pl-k">:</span> <span class="pl-c1">3</span></td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">										},</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">										optional<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">											{googLeakyBucket<span class="pl-k">:</span> <span class="pl-c1">true</span>},</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">											{googTemporalLayeredScreencast<span class="pl-k">:</span> <span class="pl-c1">true</span>}</td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">										]</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">									}</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">								};</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">constraints</span>.<span class="pl-smi">video</span>.<span class="pl-smi">mandatory</span>.<span class="pl-smi">chromeMediaSourceId</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">data</span>.<span class="pl-smi">sourceId</span>;</td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">								<span class="pl-en">getScreenMedia</span>(constraints, callback);</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-c1">data</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>janusGetScreenPending<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">							<span class="pl-c1">window</span>.<span class="pl-en">clearTimeout</span>(<span class="pl-c1">event</span>.<span class="pl-c1">data</span>.<span class="pl-c1">id</span>);</td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> If we got here, we&#39;re not screensharing</span></td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(media <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> media <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>screen<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Check whether all media sources are actually available or not</span></td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span>.<span class="pl-en">enumerateDevices</span>().<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">devices</span>) {</td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> audioExist <span class="pl-k">=</span> <span class="pl-smi">devices</span>.<span class="pl-en">some</span>(<span class="pl-k">function</span>(<span class="pl-smi">device</span>) {</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">device</span>.<span class="pl-smi">kind</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>audioinput<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">					}),</td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code blob-code-inner js-file-line">					videoExist <span class="pl-k">=</span> <span class="pl-smi">devices</span>.<span class="pl-en">some</span>(<span class="pl-k">function</span>(<span class="pl-smi">device</span>) {</td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">device</span>.<span class="pl-smi">kind</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>videoinput<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Check whether a missing device is really a problem</span></td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> audioSend <span class="pl-k">=</span> <span class="pl-en">isAudioSendEnabled</span>(media);</td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> videoSend <span class="pl-k">=</span> <span class="pl-en">isVideoSendEnabled</span>(media);</td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> needAudioDevice <span class="pl-k">=</span> <span class="pl-en">isAudioSendRequired</span>(media);</td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> needVideoDevice <span class="pl-k">=</span> <span class="pl-en">isVideoSendRequired</span>(media);</td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(audioSend <span class="pl-k">||</span> videoSend <span class="pl-k">||</span> needAudioDevice <span class="pl-k">||</span> needVideoDevice) {</td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> We need to send either audio or video</span></td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> haveAudioDevice <span class="pl-k">=</span> audioSend <span class="pl-k">?</span> audioExist <span class="pl-k">:</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> haveVideoDevice <span class="pl-k">=</span> videoSend <span class="pl-k">?</span> videoExist <span class="pl-k">:</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-k">!</span>haveAudioDevice <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>haveVideoDevice) {</td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> FIXME Should we really give up, or just assume recvonly for both?</span></td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>No capture device found<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span>haveAudioDevice <span class="pl-k">&amp;&amp;</span> needAudioDevice) {</td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Audio capture is required, but no capture device found<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span>haveVideoDevice <span class="pl-k">&amp;&amp;</span> needVideoDevice) {</td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Video capture is required, but no capture device found<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">navigator</span>.<span class="pl-smi">mediaDevices</span>.<span class="pl-en">getUserMedia</span>({</td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code blob-code-inner js-file-line">						audio<span class="pl-k">:</span> audioExist <span class="pl-k">?</span> audioSupport <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code blob-code-inner js-file-line">						video<span class="pl-k">:</span> videoExist <span class="pl-k">?</span> videoSupport <span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code blob-code-inner js-file-line">					})</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">stream</span>) { <span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>); <span class="pl-en">streamsDone</span>(handleId, jsep, media, callbacks, stream); })</td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">catch</span>(<span class="pl-k">function</span>(<span class="pl-smi">error</span>) { <span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>); <span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>({code<span class="pl-k">:</span> <span class="pl-smi">error</span>.<span class="pl-c1">code</span>, name<span class="pl-k">:</span> <span class="pl-smi">error</span>.<span class="pl-c1">name</span>, message<span class="pl-k">:</span> <span class="pl-smi">error</span>.<span class="pl-smi">message</span>}); });</td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code blob-code-inner js-file-line">				})</td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">catch</span>(<span class="pl-k">function</span>(<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">pluginHandle</span>.<span class="pl-en">consentDialog</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>enumerateDevices error<span class="pl-pds">&#39;</span></span>, error);</td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> No need to do a getUserMedia, create offer/answer right away</span></td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">streamsDone</span>(handleId, jsep, media, callbacks);</td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">prepareWebrtcPeer</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> webrtcError;</td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> jsep <span class="pl-k">=</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">jsep</span>;</td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(jsep <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> jsep <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Wait, no PeerConnection?? if this is an answer, use createAnswer and not handleRemoteJsep<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No PeerConnection: if this is an answer, use createAnswer and not handleRemoteJsep<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>edge<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> This is Edge, add an a=end-of-candidates at the end</span></td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">jsep</span>.<span class="pl-smi">sdp</span> <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>a=end-of-candidates<span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">setRemoteDescription</span>(</td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">new</span> <span class="pl-en">RTCSessionDescription</span>(jsep),</td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Remote description accepted!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>();</td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code blob-code-inner js-file-line">					}, <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span>);</td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid JSEP<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">createOffer</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">media</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Creating offer (iceDone=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">config</span>.<span class="pl-smi">iceDone</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> https://code.google.com/p/webrtc/issues/detail?id=3508</span></td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> mediaConstraints <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>firefox<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>edge<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code blob-code-inner js-file-line">			mediaConstraints <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>offerToReceiveAudio<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-en">isAudioRecvEnabled</span>(media),</td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>offerToReceiveVideo<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-en">isVideoRecvEnabled</span>(media)</td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code blob-code-inner js-file-line">			mediaConstraints <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>mandatory<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>OfferToReceiveAudio<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-en">isAudioRecvEnabled</span>(media),</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>OfferToReceiveVideo<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-en">isVideoRecvEnabled</span>(media)</td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(mediaConstraints);</td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">createOffer</span>(</td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span>(<span class="pl-smi">offer</span>) {</td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(offer);</td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Setting local description<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">=</span> <span class="pl-smi">offer</span>.<span class="pl-smi">sdp</span>;</td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">setLocalDescription</span>(offer);</td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">config</span>.<span class="pl-smi">iceDone</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">config</span>.<span class="pl-smi">trickle</span>) {</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Don&#39;t do anything until we have all candidates</span></td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Waiting for all candidates...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">sdpSent</span>) {</td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Offer already sent, not sending it again<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Offer ready<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(callbacks);</td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">config</span>.<span class="pl-smi">sdpSent</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> JSON.stringify doesn&#39;t work on some WebRTC objects anymore</span></td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> See https://code.google.com/p/chromium/issues/detail?id=467366</span></td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> jsep <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">offer</span>.<span class="pl-c1">type</span>,</td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>sdp<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">offer</span>.<span class="pl-smi">sdp</span></td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>(jsep);</td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span>, mediaConstraints);</td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">createAnswer</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">media</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">callbacks</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Creating answer (iceDone=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">config</span>.<span class="pl-smi">iceDone</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> mediaConstraints <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>firefox<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>edge<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code blob-code-inner js-file-line">			mediaConstraints <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>offerToReceiveAudio<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-en">isAudioRecvEnabled</span>(media),</td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>offerToReceiveVideo<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-en">isVideoRecvEnabled</span>(media)</td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code blob-code-inner js-file-line">			mediaConstraints <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>mandatory<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>OfferToReceiveAudio<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-en">isAudioRecvEnabled</span>(media),</td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>OfferToReceiveVideo<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-en">isVideoRecvEnabled</span>(media)</td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(mediaConstraints);</td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">createAnswer</span>(</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span>(<span class="pl-smi">answer</span>) {</td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(answer);</td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Setting local description<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">=</span> <span class="pl-smi">answer</span>.<span class="pl-smi">sdp</span>;</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">setLocalDescription</span>(answer);</td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">config</span>.<span class="pl-smi">iceDone</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">config</span>.<span class="pl-smi">trickle</span>) {</td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Don&#39;t do anything until we have all candidates</span></td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Waiting for all candidates...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">sdpSent</span>) {	<span class="pl-c"><span class="pl-c">//</span> FIXME badly</span></td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Answer already sent, not sending it again<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">config</span>.<span class="pl-smi">sdpSent</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> JSON.stringify doesn&#39;t work on some WebRTC objects anymore</span></td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> See https://code.google.com/p/chromium/issues/detail?id=467366</span></td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> jsep <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">answer</span>.<span class="pl-c1">type</span>,</td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>sdp<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">answer</span>.<span class="pl-smi">sdp</span></td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>(jsep);</td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span>, mediaConstraints);</td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">sendSDP</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">callbacks</span>) {</td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code blob-code-inner js-file-line">		callbacks <span class="pl-k">=</span> callbacks <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">success</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">callbacks</span>.<span class="pl-smi">error</span> <span class="pl-k">:</span> <span class="pl-smi">jQuery</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle, not sending anything<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sending offer/answer SDP...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Local SDP instance is invalid, not sending anything...<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-smi">localDescription</span>.<span class="pl-c1">type</span>,</td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>sdp<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-smi">localDescription</span>.<span class="pl-smi">sdp</span></td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">sdpSent</span>) {</td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Offer/Answer SDP already sent, not sending it again<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">trickle</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>trickle<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(callbacks);</td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">config</span>.<span class="pl-smi">sdpSent</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">callbacks</span>.<span class="pl-en">success</span>(<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span>);</td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">getVolume</span>(<span class="pl-smi">handleId</span>) {</td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Start getting the volume, if getStats is supported</span></td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-smi">getStats</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>chrome<span class="pl-pds">&quot;</span></span>) {	<span class="pl-c"><span class="pl-c">//</span> FIXME</span></td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Remote stream unavailable<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> http://webrtc.googlecode.com/svn/trunk/samples/js/demos/html/constraints-and-stats.html</span></td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-smi">timer</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-smi">timer</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Starting volume monitor<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-smi">timer</span> <span class="pl-k">=</span> <span class="pl-c1">setInterval</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">getStats</span>(<span class="pl-k">function</span>(<span class="pl-smi">stats</span>) {</td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> results <span class="pl-k">=</span> <span class="pl-smi">stats</span>.<span class="pl-en">result</span>();</td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span><span class="pl-smi">results</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> res <span class="pl-k">=</span> results[i];</td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span>(<span class="pl-smi">res</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ssrc<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">res</span>.<span class="pl-en">stat</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>audioOutputLevel<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-smi">res</span>.<span class="pl-en">stat</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>audioOutputLevel<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">0</span>;	<span class="pl-c"><span class="pl-c">//</span> We don&#39;t have a volume to return yet</span></td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Getting the remote volume unsupported by browser<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isMuted</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">video</span>) {</td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid PeerConnection<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid local MediaStream<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(video) {</td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Check video track</span></td>
      </tr>
      <tr>
        <td id="L1936" class="blob-num js-line-number" data-line-number="1936"></td>
        <td id="LC1936" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getVideoTracks</span>() <span class="pl-k">===</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L1937" class="blob-num js-line-number" data-line-number="1937"></td>
        <td id="LC1937" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getVideoTracks</span>() <span class="pl-k">===</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L1938" class="blob-num js-line-number" data-line-number="1938"></td>
        <td id="LC1938" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getVideoTracks</span>().<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1939" class="blob-num js-line-number" data-line-number="1939"></td>
        <td id="LC1939" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No video track<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1940" class="blob-num js-line-number" data-line-number="1940"></td>
        <td id="LC1940" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1941" class="blob-num js-line-number" data-line-number="1941"></td>
        <td id="LC1941" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1942" class="blob-num js-line-number" data-line-number="1942"></td>
        <td id="LC1942" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getVideoTracks</span>()[<span class="pl-c1">0</span>].<span class="pl-smi">enabled</span>;</td>
      </tr>
      <tr>
        <td id="L1943" class="blob-num js-line-number" data-line-number="1943"></td>
        <td id="LC1943" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1944" class="blob-num js-line-number" data-line-number="1944"></td>
        <td id="LC1944" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Check audio track</span></td>
      </tr>
      <tr>
        <td id="L1945" class="blob-num js-line-number" data-line-number="1945"></td>
        <td id="LC1945" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>() <span class="pl-k">===</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L1946" class="blob-num js-line-number" data-line-number="1946"></td>
        <td id="LC1946" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>() <span class="pl-k">===</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L1947" class="blob-num js-line-number" data-line-number="1947"></td>
        <td id="LC1947" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>().<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1948" class="blob-num js-line-number" data-line-number="1948"></td>
        <td id="LC1948" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No audio track<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1949" class="blob-num js-line-number" data-line-number="1949"></td>
        <td id="LC1949" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1950" class="blob-num js-line-number" data-line-number="1950"></td>
        <td id="LC1950" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1951" class="blob-num js-line-number" data-line-number="1951"></td>
        <td id="LC1951" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>()[<span class="pl-c1">0</span>].<span class="pl-smi">enabled</span>;</td>
      </tr>
      <tr>
        <td id="L1952" class="blob-num js-line-number" data-line-number="1952"></td>
        <td id="LC1952" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1953" class="blob-num js-line-number" data-line-number="1953"></td>
        <td id="LC1953" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1954" class="blob-num js-line-number" data-line-number="1954"></td>
        <td id="LC1954" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1955" class="blob-num js-line-number" data-line-number="1955"></td>
        <td id="LC1955" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">mute</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">video</span>, <span class="pl-smi">mute</span>) {</td>
      </tr>
      <tr>
        <td id="L1956" class="blob-num js-line-number" data-line-number="1956"></td>
        <td id="LC1956" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1957" class="blob-num js-line-number" data-line-number="1957"></td>
        <td id="LC1957" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1958" class="blob-num js-line-number" data-line-number="1958"></td>
        <td id="LC1958" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1959" class="blob-num js-line-number" data-line-number="1959"></td>
        <td id="LC1959" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1960" class="blob-num js-line-number" data-line-number="1960"></td>
        <td id="LC1960" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1961" class="blob-num js-line-number" data-line-number="1961"></td>
        <td id="LC1961" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1962" class="blob-num js-line-number" data-line-number="1962"></td>
        <td id="LC1962" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L1963" class="blob-num js-line-number" data-line-number="1963"></td>
        <td id="LC1963" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1964" class="blob-num js-line-number" data-line-number="1964"></td>
        <td id="LC1964" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid PeerConnection<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1965" class="blob-num js-line-number" data-line-number="1965"></td>
        <td id="LC1965" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1966" class="blob-num js-line-number" data-line-number="1966"></td>
        <td id="LC1966" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1967" class="blob-num js-line-number" data-line-number="1967"></td>
        <td id="LC1967" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1968" class="blob-num js-line-number" data-line-number="1968"></td>
        <td id="LC1968" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid local MediaStream<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1969" class="blob-num js-line-number" data-line-number="1969"></td>
        <td id="LC1969" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1970" class="blob-num js-line-number" data-line-number="1970"></td>
        <td id="LC1970" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1971" class="blob-num js-line-number" data-line-number="1971"></td>
        <td id="LC1971" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(video) {</td>
      </tr>
      <tr>
        <td id="L1972" class="blob-num js-line-number" data-line-number="1972"></td>
        <td id="LC1972" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Mute/unmute video track</span></td>
      </tr>
      <tr>
        <td id="L1973" class="blob-num js-line-number" data-line-number="1973"></td>
        <td id="LC1973" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getVideoTracks</span>() <span class="pl-k">===</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L1974" class="blob-num js-line-number" data-line-number="1974"></td>
        <td id="LC1974" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getVideoTracks</span>() <span class="pl-k">===</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L1975" class="blob-num js-line-number" data-line-number="1975"></td>
        <td id="LC1975" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getVideoTracks</span>().<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1976" class="blob-num js-line-number" data-line-number="1976"></td>
        <td id="LC1976" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No video track<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1977" class="blob-num js-line-number" data-line-number="1977"></td>
        <td id="LC1977" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1978" class="blob-num js-line-number" data-line-number="1978"></td>
        <td id="LC1978" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1979" class="blob-num js-line-number" data-line-number="1979"></td>
        <td id="LC1979" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getVideoTracks</span>()[<span class="pl-c1">0</span>].<span class="pl-smi">enabled</span> <span class="pl-k">=</span> mute <span class="pl-k">?</span> <span class="pl-c1">false</span> <span class="pl-k">:</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1980" class="blob-num js-line-number" data-line-number="1980"></td>
        <td id="LC1980" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1981" class="blob-num js-line-number" data-line-number="1981"></td>
        <td id="LC1981" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1982" class="blob-num js-line-number" data-line-number="1982"></td>
        <td id="LC1982" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Mute/unmute audio track</span></td>
      </tr>
      <tr>
        <td id="L1983" class="blob-num js-line-number" data-line-number="1983"></td>
        <td id="LC1983" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>() <span class="pl-k">===</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L1984" class="blob-num js-line-number" data-line-number="1984"></td>
        <td id="LC1984" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>() <span class="pl-k">===</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L1985" class="blob-num js-line-number" data-line-number="1985"></td>
        <td id="LC1985" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>().<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1986" class="blob-num js-line-number" data-line-number="1986"></td>
        <td id="LC1986" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No audio track<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1987" class="blob-num js-line-number" data-line-number="1987"></td>
        <td id="LC1987" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1988" class="blob-num js-line-number" data-line-number="1988"></td>
        <td id="LC1988" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1989" class="blob-num js-line-number" data-line-number="1989"></td>
        <td id="LC1989" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getAudioTracks</span>()[<span class="pl-c1">0</span>].<span class="pl-smi">enabled</span> <span class="pl-k">=</span> mute <span class="pl-k">?</span> <span class="pl-c1">false</span> <span class="pl-k">:</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1990" class="blob-num js-line-number" data-line-number="1990"></td>
        <td id="LC1990" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1991" class="blob-num js-line-number" data-line-number="1991"></td>
        <td id="LC1991" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1992" class="blob-num js-line-number" data-line-number="1992"></td>
        <td id="LC1992" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L1993" class="blob-num js-line-number" data-line-number="1993"></td>
        <td id="LC1993" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1994" class="blob-num js-line-number" data-line-number="1994"></td>
        <td id="LC1994" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">getBitrate</span>(<span class="pl-smi">handleId</span>) {</td>
      </tr>
      <tr>
        <td id="L1995" class="blob-num js-line-number" data-line-number="1995"></td>
        <td id="LC1995" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L1996" class="blob-num js-line-number" data-line-number="1996"></td>
        <td id="LC1996" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1997" class="blob-num js-line-number" data-line-number="1997"></td>
        <td id="LC1997" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1998" class="blob-num js-line-number" data-line-number="1998"></td>
        <td id="LC1998" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1999" class="blob-num js-line-number" data-line-number="1999"></td>
        <td id="LC1999" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Invalid handle<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2000" class="blob-num js-line-number" data-line-number="2000"></td>
        <td id="LC2000" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2001" class="blob-num js-line-number" data-line-number="2001"></td>
        <td id="LC2001" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L2002" class="blob-num js-line-number" data-line-number="2002"></td>
        <td id="LC2002" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L2003" class="blob-num js-line-number" data-line-number="2003"></td>
        <td id="LC2003" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Invalid PeerConnection<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2004" class="blob-num js-line-number" data-line-number="2004"></td>
        <td id="LC2004" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Start getting the bitrate, if getStats is supported</span></td>
      </tr>
      <tr>
        <td id="L2005" class="blob-num js-line-number" data-line-number="2005"></td>
        <td id="LC2005" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-smi">getStats</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>chrome<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2006" class="blob-num js-line-number" data-line-number="2006"></td>
        <td id="LC2006" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Do it the Chrome way</span></td>
      </tr>
      <tr>
        <td id="L2007" class="blob-num js-line-number" data-line-number="2007"></td>
        <td id="LC2007" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2008" class="blob-num js-line-number" data-line-number="2008"></td>
        <td id="LC2008" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Remote stream unavailable<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2009" class="blob-num js-line-number" data-line-number="2009"></td>
        <td id="LC2009" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Remote stream unavailable<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2010" class="blob-num js-line-number" data-line-number="2010"></td>
        <td id="LC2010" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2011" class="blob-num js-line-number" data-line-number="2011"></td>
        <td id="LC2011" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> http://webrtc.googlecode.com/svn/trunk/samples/js/demos/html/constraints-and-stats.html</span></td>
      </tr>
      <tr>
        <td id="L2012" class="blob-num js-line-number" data-line-number="2012"></td>
        <td id="LC2012" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2013" class="blob-num js-line-number" data-line-number="2013"></td>
        <td id="LC2013" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Starting bitrate timer (Chrome)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2014" class="blob-num js-line-number" data-line-number="2014"></td>
        <td id="LC2014" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span> <span class="pl-k">=</span> <span class="pl-c1">setInterval</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2015" class="blob-num js-line-number" data-line-number="2015"></td>
        <td id="LC2015" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">getStats</span>(<span class="pl-k">function</span>(<span class="pl-smi">stats</span>) {</td>
      </tr>
      <tr>
        <td id="L2016" class="blob-num js-line-number" data-line-number="2016"></td>
        <td id="LC2016" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> results <span class="pl-k">=</span> <span class="pl-smi">stats</span>.<span class="pl-en">result</span>();</td>
      </tr>
      <tr>
        <td id="L2017" class="blob-num js-line-number" data-line-number="2017"></td>
        <td id="LC2017" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span><span class="pl-smi">results</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L2018" class="blob-num js-line-number" data-line-number="2018"></td>
        <td id="LC2018" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> res <span class="pl-k">=</span> results[i];</td>
      </tr>
      <tr>
        <td id="L2019" class="blob-num js-line-number" data-line-number="2019"></td>
        <td id="LC2019" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span>(<span class="pl-smi">res</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ssrc<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">res</span>.<span class="pl-en">stat</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>googFrameHeightReceived<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L2020" class="blob-num js-line-number" data-line-number="2020"></td>
        <td id="LC2020" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span> <span class="pl-k">=</span> <span class="pl-smi">res</span>.<span class="pl-en">stat</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bytesReceived<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2021" class="blob-num js-line-number" data-line-number="2021"></td>
        <td id="LC2021" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span> <span class="pl-k">=</span> <span class="pl-smi">res</span>.<span class="pl-smi">timestamp</span>;</td>
      </tr>
      <tr>
        <td id="L2022" class="blob-num js-line-number" data-line-number="2022"></td>
        <td id="LC2022" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L2023" class="blob-num js-line-number" data-line-number="2023"></td>
        <td id="LC2023" class="blob-code blob-code-inner js-file-line">									<span class="pl-c"><span class="pl-c">//</span> Skip this round</span></td>
      </tr>
      <tr>
        <td id="L2024" class="blob-num js-line-number" data-line-number="2024"></td>
        <td id="LC2024" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span>;</td>
      </tr>
      <tr>
        <td id="L2025" class="blob-num js-line-number" data-line-number="2025"></td>
        <td id="LC2025" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span>;</td>
      </tr>
      <tr>
        <td id="L2026" class="blob-num js-line-number" data-line-number="2026"></td>
        <td id="LC2026" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2027" class="blob-num js-line-number" data-line-number="2027"></td>
        <td id="LC2027" class="blob-code blob-code-inner js-file-line">									<span class="pl-c"><span class="pl-c">//</span> Calculate bitrate</span></td>
      </tr>
      <tr>
        <td id="L2028" class="blob-num js-line-number" data-line-number="2028"></td>
        <td id="LC2028" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">var</span> bitRate <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>((<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span> <span class="pl-k">-</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span>) <span class="pl-k">*</span> <span class="pl-c1">8</span> <span class="pl-k">/</span> (<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span> <span class="pl-k">-</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span>));</td>
      </tr>
      <tr>
        <td id="L2029" class="blob-num js-line-number" data-line-number="2029"></td>
        <td id="LC2029" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> bitRate <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> kbits/sec<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2030" class="blob-num js-line-number" data-line-number="2030"></td>
        <td id="LC2030" class="blob-code blob-code-inner js-file-line">									<span class="pl-c"><span class="pl-c">//</span>~ Janus.log(&quot;Estimated bitrate is &quot; + config.bitrate.value);</span></td>
      </tr>
      <tr>
        <td id="L2031" class="blob-num js-line-number" data-line-number="2031"></td>
        <td id="LC2031" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span>;</td>
      </tr>
      <tr>
        <td id="L2032" class="blob-num js-line-number" data-line-number="2032"></td>
        <td id="LC2032" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span>;</td>
      </tr>
      <tr>
        <td id="L2033" class="blob-num js-line-number" data-line-number="2033"></td>
        <td id="LC2033" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L2034" class="blob-num js-line-number" data-line-number="2034"></td>
        <td id="LC2034" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L2035" class="blob-num js-line-number" data-line-number="2035"></td>
        <td id="LC2035" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L2036" class="blob-num js-line-number" data-line-number="2036"></td>
        <td id="LC2036" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L2037" class="blob-num js-line-number" data-line-number="2037"></td>
        <td id="LC2037" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L2038" class="blob-num js-line-number" data-line-number="2038"></td>
        <td id="LC2038" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>0 kbits/sec<span class="pl-pds">&quot;</span></span>;	<span class="pl-c"><span class="pl-c">//</span> We don&#39;t have a bitrate value yet</span></td>
      </tr>
      <tr>
        <td id="L2039" class="blob-num js-line-number" data-line-number="2039"></td>
        <td id="LC2039" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2040" class="blob-num js-line-number" data-line-number="2040"></td>
        <td id="LC2040" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L2041" class="blob-num js-line-number" data-line-number="2041"></td>
        <td id="LC2041" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-smi">getStats</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>firefox<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2042" class="blob-num js-line-number" data-line-number="2042"></td>
        <td id="LC2042" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Do it the Firefox way</span></td>
      </tr>
      <tr>
        <td id="L2043" class="blob-num js-line-number" data-line-number="2043"></td>
        <td id="LC2043" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L2044" class="blob-num js-line-number" data-line-number="2044"></td>
        <td id="LC2044" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span>.<span class="pl-smi">stream</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span>.<span class="pl-smi">stream</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2045" class="blob-num js-line-number" data-line-number="2045"></td>
        <td id="LC2045" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Remote stream unavailable<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2046" class="blob-num js-line-number" data-line-number="2046"></td>
        <td id="LC2046" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Remote stream unavailable<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2047" class="blob-num js-line-number" data-line-number="2047"></td>
        <td id="LC2047" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2048" class="blob-num js-line-number" data-line-number="2048"></td>
        <td id="LC2048" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> videoTracks <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span>.<span class="pl-smi">stream</span>.<span class="pl-en">getVideoTracks</span>();</td>
      </tr>
      <tr>
        <td id="L2049" class="blob-num js-line-number" data-line-number="2049"></td>
        <td id="LC2049" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(videoTracks <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> videoTracks <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">videoTracks</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L2050" class="blob-num js-line-number" data-line-number="2050"></td>
        <td id="LC2050" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No video track<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2051" class="blob-num js-line-number" data-line-number="2051"></td>
        <td id="LC2051" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>No video track<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2052" class="blob-num js-line-number" data-line-number="2052"></td>
        <td id="LC2052" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2053" class="blob-num js-line-number" data-line-number="2053"></td>
        <td id="LC2053" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> https://github.com/muaz-khan/getStats/blob/master/getStats.js</span></td>
      </tr>
      <tr>
        <td id="L2054" class="blob-num js-line-number" data-line-number="2054"></td>
        <td id="LC2054" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2055" class="blob-num js-line-number" data-line-number="2055"></td>
        <td id="LC2055" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Starting bitrate timer (Firefox)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2056" class="blob-num js-line-number" data-line-number="2056"></td>
        <td id="LC2056" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span> <span class="pl-k">=</span> <span class="pl-c1">setInterval</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2057" class="blob-num js-line-number" data-line-number="2057"></td>
        <td id="LC2057" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> We need a helper callback</span></td>
      </tr>
      <tr>
        <td id="L2058" class="blob-num js-line-number" data-line-number="2058"></td>
        <td id="LC2058" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> <span class="pl-en">cb</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">res</span>) {</td>
      </tr>
      <tr>
        <td id="L2059" class="blob-num js-line-number" data-line-number="2059"></td>
        <td id="LC2059" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(res <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> res <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L2060" class="blob-num js-line-number" data-line-number="2060"></td>
        <td id="LC2060" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">res</span>.<span class="pl-smi">inbound_rtp_video_1</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">res</span>.<span class="pl-smi">inbound_rtp_video_1</span> <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L2061" class="blob-num js-line-number" data-line-number="2061"></td>
        <td id="LC2061" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Missing inbound_rtp_video_1<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2062" class="blob-num js-line-number" data-line-number="2062"></td>
        <td id="LC2062" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L2063" class="blob-num js-line-number" data-line-number="2063"></td>
        <td id="LC2063" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L2064" class="blob-num js-line-number" data-line-number="2064"></td>
        <td id="LC2064" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span> <span class="pl-k">=</span> <span class="pl-smi">res</span>.<span class="pl-smi">inbound_rtp_video_1</span>.<span class="pl-smi">bytesReceived</span>;</td>
      </tr>
      <tr>
        <td id="L2065" class="blob-num js-line-number" data-line-number="2065"></td>
        <td id="LC2065" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span> <span class="pl-k">=</span> <span class="pl-smi">res</span>.<span class="pl-smi">inbound_rtp_video_1</span>.<span class="pl-smi">timestamp</span>;</td>
      </tr>
      <tr>
        <td id="L2066" class="blob-num js-line-number" data-line-number="2066"></td>
        <td id="LC2066" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L2067" class="blob-num js-line-number" data-line-number="2067"></td>
        <td id="LC2067" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> Skip this round</span></td>
      </tr>
      <tr>
        <td id="L2068" class="blob-num js-line-number" data-line-number="2068"></td>
        <td id="LC2068" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span>;</td>
      </tr>
      <tr>
        <td id="L2069" class="blob-num js-line-number" data-line-number="2069"></td>
        <td id="LC2069" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span>;</td>
      </tr>
      <tr>
        <td id="L2070" class="blob-num js-line-number" data-line-number="2070"></td>
        <td id="LC2070" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2071" class="blob-num js-line-number" data-line-number="2071"></td>
        <td id="LC2071" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span> Calculate bitrate</span></td>
      </tr>
      <tr>
        <td id="L2072" class="blob-num js-line-number" data-line-number="2072"></td>
        <td id="LC2072" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> bitRate <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>((<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span> <span class="pl-k">-</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span>) <span class="pl-k">*</span> <span class="pl-c1">8</span> <span class="pl-k">/</span> (<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span> <span class="pl-k">-</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span>));</td>
      </tr>
      <tr>
        <td id="L2073" class="blob-num js-line-number" data-line-number="2073"></td>
        <td id="LC2073" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> bitRate <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> kbits/sec<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2074" class="blob-num js-line-number" data-line-number="2074"></td>
        <td id="LC2074" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span>;</td>
      </tr>
      <tr>
        <td id="L2075" class="blob-num js-line-number" data-line-number="2075"></td>
        <td id="LC2075" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span> <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span>;</td>
      </tr>
      <tr>
        <td id="L2076" class="blob-num js-line-number" data-line-number="2076"></td>
        <td id="LC2076" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L2077" class="blob-num js-line-number" data-line-number="2077"></td>
        <td id="LC2077" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L2078" class="blob-num js-line-number" data-line-number="2078"></td>
        <td id="LC2078" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Actually get the stats</span></td>
      </tr>
      <tr>
        <td id="L2079" class="blob-num js-line-number" data-line-number="2079"></td>
        <td id="LC2079" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-en">getStats</span>(videoTracks[<span class="pl-c1">0</span>], <span class="pl-k">function</span>(<span class="pl-smi">stats</span>) {</td>
      </tr>
      <tr>
        <td id="L2080" class="blob-num js-line-number" data-line-number="2080"></td>
        <td id="LC2080" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">cb</span>(stats);</td>
      </tr>
      <tr>
        <td id="L2081" class="blob-num js-line-number" data-line-number="2081"></td>
        <td id="LC2081" class="blob-code blob-code-inner js-file-line">					}, cb);</td>
      </tr>
      <tr>
        <td id="L2082" class="blob-num js-line-number" data-line-number="2082"></td>
        <td id="LC2082" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L2083" class="blob-num js-line-number" data-line-number="2083"></td>
        <td id="LC2083" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>0 kbits/sec<span class="pl-pds">&quot;</span></span>;	<span class="pl-c"><span class="pl-c">//</span> We don&#39;t have a bitrate value yet</span></td>
      </tr>
      <tr>
        <td id="L2084" class="blob-num js-line-number" data-line-number="2084"></td>
        <td id="LC2084" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2085" class="blob-num js-line-number" data-line-number="2085"></td>
        <td id="LC2085" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L2086" class="blob-num js-line-number" data-line-number="2086"></td>
        <td id="LC2086" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2087" class="blob-num js-line-number" data-line-number="2087"></td>
        <td id="LC2087" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Getting the video bitrate unsupported by browser<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2088" class="blob-num js-line-number" data-line-number="2088"></td>
        <td id="LC2088" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Feature unsupported by browser<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2089" class="blob-num js-line-number" data-line-number="2089"></td>
        <td id="LC2089" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2090" class="blob-num js-line-number" data-line-number="2090"></td>
        <td id="LC2090" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2091" class="blob-num js-line-number" data-line-number="2091"></td>
        <td id="LC2091" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2092" class="blob-num js-line-number" data-line-number="2092"></td>
        <td id="LC2092" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">webrtcError</span>(<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L2093" class="blob-num js-line-number" data-line-number="2093"></td>
        <td id="LC2093" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>WebRTC error:<span class="pl-pds">&quot;</span></span>, error);</td>
      </tr>
      <tr>
        <td id="L2094" class="blob-num js-line-number" data-line-number="2094"></td>
        <td id="LC2094" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2095" class="blob-num js-line-number" data-line-number="2095"></td>
        <td id="LC2095" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2096" class="blob-num js-line-number" data-line-number="2096"></td>
        <td id="LC2096" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">cleanupWebrtc</span>(<span class="pl-smi">handleId</span>, <span class="pl-smi">hangupRequest</span>) {</td>
      </tr>
      <tr>
        <td id="L2097" class="blob-num js-line-number" data-line-number="2097"></td>
        <td id="LC2097" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Cleaning WebRTC stuff<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2098" class="blob-num js-line-number" data-line-number="2098"></td>
        <td id="LC2098" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pluginHandle <span class="pl-k">=</span> pluginHandles[handleId];</td>
      </tr>
      <tr>
        <td id="L2099" class="blob-num js-line-number" data-line-number="2099"></td>
        <td id="LC2099" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(pluginHandle <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> pluginHandle <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2100" class="blob-num js-line-number" data-line-number="2100"></td>
        <td id="LC2100" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Nothing to clean</span></td>
      </tr>
      <tr>
        <td id="L2101" class="blob-num js-line-number" data-line-number="2101"></td>
        <td id="LC2101" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L2102" class="blob-num js-line-number" data-line-number="2102"></td>
        <td id="LC2102" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2103" class="blob-num js-line-number" data-line-number="2103"></td>
        <td id="LC2103" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> config <span class="pl-k">=</span> <span class="pl-smi">pluginHandle</span>.<span class="pl-smi">webrtcStuff</span>;</td>
      </tr>
      <tr>
        <td id="L2104" class="blob-num js-line-number" data-line-number="2104"></td>
        <td id="LC2104" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(config <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> config <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2105" class="blob-num js-line-number" data-line-number="2105"></td>
        <td id="LC2105" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(hangupRequest <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L2106" class="blob-num js-line-number" data-line-number="2106"></td>
        <td id="LC2106" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Send a hangup request (we don&#39;t really care about the response)</span></td>
      </tr>
      <tr>
        <td id="L2107" class="blob-num js-line-number" data-line-number="2107"></td>
        <td id="LC2107" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> request <span class="pl-k">=</span> { <span class="pl-s"><span class="pl-pds">&quot;</span>janus<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>hangup<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>transaction<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">Janus</span>.<span class="pl-en">randomString</span>(<span class="pl-c1">12</span>) };</td>
      </tr>
      <tr>
        <td id="L2108" class="blob-num js-line-number" data-line-number="2108"></td>
        <td id="LC2108" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(token <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> token <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L2109" class="blob-num js-line-number" data-line-number="2109"></td>
        <td id="LC2109" class="blob-code blob-code-inner js-file-line">					request[<span class="pl-s"><span class="pl-pds">&quot;</span>token<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L2110" class="blob-num js-line-number" data-line-number="2110"></td>
        <td id="LC2110" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(apisecret <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> apisecret <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L2111" class="blob-num js-line-number" data-line-number="2111"></td>
        <td id="LC2111" class="blob-code blob-code-inner js-file-line">					request[<span class="pl-s"><span class="pl-pds">&quot;</span>apisecret<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> apisecret;</td>
      </tr>
      <tr>
        <td id="L2112" class="blob-num js-line-number" data-line-number="2112"></td>
        <td id="LC2112" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sending hangup request (handle=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>):<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2113" class="blob-num js-line-number" data-line-number="2113"></td>
        <td id="LC2113" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(request);</td>
      </tr>
      <tr>
        <td id="L2114" class="blob-num js-line-number" data-line-number="2114"></td>
        <td id="LC2114" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(websockets) {</td>
      </tr>
      <tr>
        <td id="L2115" class="blob-num js-line-number" data-line-number="2115"></td>
        <td id="LC2115" class="blob-code blob-code-inner js-file-line">					request[<span class="pl-s"><span class="pl-pds">&quot;</span>session_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> sessionId;</td>
      </tr>
      <tr>
        <td id="L2116" class="blob-num js-line-number" data-line-number="2116"></td>
        <td id="LC2116" class="blob-code blob-code-inner js-file-line">					request[<span class="pl-s"><span class="pl-pds">&quot;</span>handle_id<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> handleId;</td>
      </tr>
      <tr>
        <td id="L2117" class="blob-num js-line-number" data-line-number="2117"></td>
        <td id="LC2117" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ws</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request));</td>
      </tr>
      <tr>
        <td id="L2118" class="blob-num js-line-number" data-line-number="2118"></td>
        <td id="LC2118" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2119" class="blob-num js-line-number" data-line-number="2119"></td>
        <td id="LC2119" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({</td>
      </tr>
      <tr>
        <td id="L2120" class="blob-num js-line-number" data-line-number="2120"></td>
        <td id="LC2120" class="blob-code blob-code-inner js-file-line">						type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2121" class="blob-num js-line-number" data-line-number="2121"></td>
        <td id="LC2121" class="blob-code blob-code-inner js-file-line">						url<span class="pl-k">:</span> server <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> sessionId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> handleId,</td>
      </tr>
      <tr>
        <td id="L2122" class="blob-num js-line-number" data-line-number="2122"></td>
        <td id="LC2122" class="blob-code blob-code-inner js-file-line">						xhrFields<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2123" class="blob-num js-line-number" data-line-number="2123"></td>
        <td id="LC2123" class="blob-code blob-code-inner js-file-line">							withCredentials<span class="pl-k">:</span> withCredentials</td>
      </tr>
      <tr>
        <td id="L2124" class="blob-num js-line-number" data-line-number="2124"></td>
        <td id="LC2124" class="blob-code blob-code-inner js-file-line">						},</td>
      </tr>
      <tr>
        <td id="L2125" class="blob-num js-line-number" data-line-number="2125"></td>
        <td id="LC2125" class="blob-code blob-code-inner js-file-line">						cache<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L2126" class="blob-num js-line-number" data-line-number="2126"></td>
        <td id="LC2126" class="blob-code blob-code-inner js-file-line">						contentType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>application/json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2127" class="blob-num js-line-number" data-line-number="2127"></td>
        <td id="LC2127" class="blob-code blob-code-inner js-file-line">						data<span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(request),</td>
      </tr>
      <tr>
        <td id="L2128" class="blob-num js-line-number" data-line-number="2128"></td>
        <td id="LC2128" class="blob-code blob-code-inner js-file-line">						dataType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L2129" class="blob-num js-line-number" data-line-number="2129"></td>
        <td id="LC2129" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L2130" class="blob-num js-line-number" data-line-number="2130"></td>
        <td id="LC2130" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2131" class="blob-num js-line-number" data-line-number="2131"></td>
        <td id="LC2131" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2132" class="blob-num js-line-number" data-line-number="2132"></td>
        <td id="LC2132" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Cleanup stack</span></td>
      </tr>
      <tr>
        <td id="L2133" class="blob-num js-line-number" data-line-number="2133"></td>
        <td id="LC2133" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">remoteStream</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2134" class="blob-num js-line-number" data-line-number="2134"></td>
        <td id="LC2134" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-smi">timer</span>)</td>
      </tr>
      <tr>
        <td id="L2135" class="blob-num js-line-number" data-line-number="2135"></td>
        <td id="LC2135" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">clearInterval</span>(<span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-smi">timer</span>);</td>
      </tr>
      <tr>
        <td id="L2136" class="blob-num js-line-number" data-line-number="2136"></td>
        <td id="LC2136" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">volume</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2137" class="blob-num js-line-number" data-line-number="2137"></td>
        <td id="LC2137" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span>)</td>
      </tr>
      <tr>
        <td id="L2138" class="blob-num js-line-number" data-line-number="2138"></td>
        <td id="LC2138" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">clearInterval</span>(<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span>);</td>
      </tr>
      <tr>
        <td id="L2139" class="blob-num js-line-number" data-line-number="2139"></td>
        <td id="LC2139" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">timer</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2140" class="blob-num js-line-number" data-line-number="2140"></td>
        <td id="LC2140" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsnow</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2141" class="blob-num js-line-number" data-line-number="2141"></td>
        <td id="LC2141" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">bsbefore</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2142" class="blob-num js-line-number" data-line-number="2142"></td>
        <td id="LC2142" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsnow</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2143" class="blob-num js-line-number" data-line-number="2143"></td>
        <td id="LC2143" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-smi">tsbefore</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2144" class="blob-num js-line-number" data-line-number="2144"></td>
        <td id="LC2144" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">bitrate</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2145" class="blob-num js-line-number" data-line-number="2145"></td>
        <td id="LC2145" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L2146" class="blob-num js-line-number" data-line-number="2146"></td>
        <td id="LC2146" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Try a MediaStream.stop() first</span></td>
      </tr>
      <tr>
        <td id="L2147" class="blob-num js-line-number" data-line-number="2147"></td>
        <td id="LC2147" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">config</span>.<span class="pl-smi">streamExternal</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2148" class="blob-num js-line-number" data-line-number="2148"></td>
        <td id="LC2148" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Stopping local stream<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2149" class="blob-num js-line-number" data-line-number="2149"></td>
        <td id="LC2149" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-c1">stop</span>();</td>
      </tr>
      <tr>
        <td id="L2150" class="blob-num js-line-number" data-line-number="2150"></td>
        <td id="LC2150" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2151" class="blob-num js-line-number" data-line-number="2151"></td>
        <td id="LC2151" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L2152" class="blob-num js-line-number" data-line-number="2152"></td>
        <td id="LC2152" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Do nothing if this fails</span></td>
      </tr>
      <tr>
        <td id="L2153" class="blob-num js-line-number" data-line-number="2153"></td>
        <td id="LC2153" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2154" class="blob-num js-line-number" data-line-number="2154"></td>
        <td id="LC2154" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L2155" class="blob-num js-line-number" data-line-number="2155"></td>
        <td id="LC2155" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Try a MediaStreamTrack.stop() for each track as well</span></td>
      </tr>
      <tr>
        <td id="L2156" class="blob-num js-line-number" data-line-number="2156"></td>
        <td id="LC2156" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">config</span>.<span class="pl-smi">streamExternal</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2157" class="blob-num js-line-number" data-line-number="2157"></td>
        <td id="LC2157" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Stopping local stream tracks<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2158" class="blob-num js-line-number" data-line-number="2158"></td>
        <td id="LC2158" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> tracks <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">myStream</span>.<span class="pl-en">getTracks</span>();</td>
      </tr>
      <tr>
        <td id="L2159" class="blob-num js-line-number" data-line-number="2159"></td>
        <td id="LC2159" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">in</span> tracks) {</td>
      </tr>
      <tr>
        <td id="L2160" class="blob-num js-line-number" data-line-number="2160"></td>
        <td id="LC2160" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> mst <span class="pl-k">=</span> tracks[i];</td>
      </tr>
      <tr>
        <td id="L2161" class="blob-num js-line-number" data-line-number="2161"></td>
        <td id="LC2161" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">Janus</span>.<span class="pl-en">log</span>(mst);</td>
      </tr>
      <tr>
        <td id="L2162" class="blob-num js-line-number" data-line-number="2162"></td>
        <td id="LC2162" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(mst <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> mst <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L2163" class="blob-num js-line-number" data-line-number="2163"></td>
        <td id="LC2163" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">mst</span>.<span class="pl-c1">stop</span>();</td>
      </tr>
      <tr>
        <td id="L2164" class="blob-num js-line-number" data-line-number="2164"></td>
        <td id="LC2164" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2165" class="blob-num js-line-number" data-line-number="2165"></td>
        <td id="LC2165" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2166" class="blob-num js-line-number" data-line-number="2166"></td>
        <td id="LC2166" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L2167" class="blob-num js-line-number" data-line-number="2167"></td>
        <td id="LC2167" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Do nothing if this fails</span></td>
      </tr>
      <tr>
        <td id="L2168" class="blob-num js-line-number" data-line-number="2168"></td>
        <td id="LC2168" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2169" class="blob-num js-line-number" data-line-number="2169"></td>
        <td id="LC2169" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">streamExternal</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2170" class="blob-num js-line-number" data-line-number="2170"></td>
        <td id="LC2170" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">myStream</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2171" class="blob-num js-line-number" data-line-number="2171"></td>
        <td id="LC2171" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Close PeerConnection</span></td>
      </tr>
      <tr>
        <td id="L2172" class="blob-num js-line-number" data-line-number="2172"></td>
        <td id="LC2172" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L2173" class="blob-num js-line-number" data-line-number="2173"></td>
        <td id="LC2173" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">config</span>.<span class="pl-smi">pc</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L2174" class="blob-num js-line-number" data-line-number="2174"></td>
        <td id="LC2174" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L2175" class="blob-num js-line-number" data-line-number="2175"></td>
        <td id="LC2175" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Do nothing</span></td>
      </tr>
      <tr>
        <td id="L2176" class="blob-num js-line-number" data-line-number="2176"></td>
        <td id="LC2176" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2177" class="blob-num js-line-number" data-line-number="2177"></td>
        <td id="LC2177" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">pc</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2178" class="blob-num js-line-number" data-line-number="2178"></td>
        <td id="LC2178" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">mySdp</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2179" class="blob-num js-line-number" data-line-number="2179"></td>
        <td id="LC2179" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">iceDone</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2180" class="blob-num js-line-number" data-line-number="2180"></td>
        <td id="LC2180" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">sdpSent</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2181" class="blob-num js-line-number" data-line-number="2181"></td>
        <td id="LC2181" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">dataChannel</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2182" class="blob-num js-line-number" data-line-number="2182"></td>
        <td id="LC2182" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">config</span>.<span class="pl-smi">dtmfSender</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L2183" class="blob-num js-line-number" data-line-number="2183"></td>
        <td id="LC2183" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2184" class="blob-num js-line-number" data-line-number="2184"></td>
        <td id="LC2184" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">pluginHandle</span>.<span class="pl-en">oncleanup</span>();</td>
      </tr>
      <tr>
        <td id="L2185" class="blob-num js-line-number" data-line-number="2185"></td>
        <td id="LC2185" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2186" class="blob-num js-line-number" data-line-number="2186"></td>
        <td id="LC2186" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2187" class="blob-num js-line-number" data-line-number="2187"></td>
        <td id="LC2187" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Helper methods to parse a media object</span></td>
      </tr>
      <tr>
        <td id="L2188" class="blob-num js-line-number" data-line-number="2188"></td>
        <td id="LC2188" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isAudioSendEnabled</span>(<span class="pl-smi">media</span>) {</td>
      </tr>
      <tr>
        <td id="L2189" class="blob-num js-line-number" data-line-number="2189"></td>
        <td id="LC2189" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isAudioSendEnabled:<span class="pl-pds">&quot;</span></span>, media);</td>
      </tr>
      <tr>
        <td id="L2190" class="blob-num js-line-number" data-line-number="2190"></td>
        <td id="LC2190" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(media <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> media <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2191" class="blob-num js-line-number" data-line-number="2191"></td>
        <td id="LC2191" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2192" class="blob-num js-line-number" data-line-number="2192"></td>
        <td id="LC2192" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">audio</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L2193" class="blob-num js-line-number" data-line-number="2193"></td>
        <td id="LC2193" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Generic audio has precedence</span></td>
      </tr>
      <tr>
        <td id="L2194" class="blob-num js-line-number" data-line-number="2194"></td>
        <td id="LC2194" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">audioSend</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">audioSend</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2195" class="blob-num js-line-number" data-line-number="2195"></td>
        <td id="LC2195" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2196" class="blob-num js-line-number" data-line-number="2196"></td>
        <td id="LC2196" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-smi">media</span>.<span class="pl-smi">audioSend</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L2197" class="blob-num js-line-number" data-line-number="2197"></td>
        <td id="LC2197" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2198" class="blob-num js-line-number" data-line-number="2198"></td>
        <td id="LC2198" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2199" class="blob-num js-line-number" data-line-number="2199"></td>
        <td id="LC2199" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isAudioSendRequired</span>(<span class="pl-smi">media</span>) {</td>
      </tr>
      <tr>
        <td id="L2200" class="blob-num js-line-number" data-line-number="2200"></td>
        <td id="LC2200" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isAudioSendRequired:<span class="pl-pds">&quot;</span></span>, media);</td>
      </tr>
      <tr>
        <td id="L2201" class="blob-num js-line-number" data-line-number="2201"></td>
        <td id="LC2201" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(media <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> media <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2202" class="blob-num js-line-number" data-line-number="2202"></td>
        <td id="LC2202" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2203" class="blob-num js-line-number" data-line-number="2203"></td>
        <td id="LC2203" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">audio</span> <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">audioSend</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L2204" class="blob-num js-line-number" data-line-number="2204"></td>
        <td id="LC2204" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> If we&#39;re not asking to capture audio, it&#39;s not required</span></td>
      </tr>
      <tr>
        <td id="L2205" class="blob-num js-line-number" data-line-number="2205"></td>
        <td id="LC2205" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">failIfNoAudio</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">failIfNoAudio</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2206" class="blob-num js-line-number" data-line-number="2206"></td>
        <td id="LC2206" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2207" class="blob-num js-line-number" data-line-number="2207"></td>
        <td id="LC2207" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-smi">media</span>.<span class="pl-smi">failIfNoAudio</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L2208" class="blob-num js-line-number" data-line-number="2208"></td>
        <td id="LC2208" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2209" class="blob-num js-line-number" data-line-number="2209"></td>
        <td id="LC2209" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2210" class="blob-num js-line-number" data-line-number="2210"></td>
        <td id="LC2210" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isAudioRecvEnabled</span>(<span class="pl-smi">media</span>) {</td>
      </tr>
      <tr>
        <td id="L2211" class="blob-num js-line-number" data-line-number="2211"></td>
        <td id="LC2211" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isAudioRecvEnabled:<span class="pl-pds">&quot;</span></span>, media);</td>
      </tr>
      <tr>
        <td id="L2212" class="blob-num js-line-number" data-line-number="2212"></td>
        <td id="LC2212" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(media <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> media <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2213" class="blob-num js-line-number" data-line-number="2213"></td>
        <td id="LC2213" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2214" class="blob-num js-line-number" data-line-number="2214"></td>
        <td id="LC2214" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">audio</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L2215" class="blob-num js-line-number" data-line-number="2215"></td>
        <td id="LC2215" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Generic audio has precedence</span></td>
      </tr>
      <tr>
        <td id="L2216" class="blob-num js-line-number" data-line-number="2216"></td>
        <td id="LC2216" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">audioRecv</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">audioRecv</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2217" class="blob-num js-line-number" data-line-number="2217"></td>
        <td id="LC2217" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2218" class="blob-num js-line-number" data-line-number="2218"></td>
        <td id="LC2218" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-smi">media</span>.<span class="pl-smi">audioRecv</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L2219" class="blob-num js-line-number" data-line-number="2219"></td>
        <td id="LC2219" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2220" class="blob-num js-line-number" data-line-number="2220"></td>
        <td id="LC2220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2221" class="blob-num js-line-number" data-line-number="2221"></td>
        <td id="LC2221" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isVideoSendEnabled</span>(<span class="pl-smi">media</span>) {</td>
      </tr>
      <tr>
        <td id="L2222" class="blob-num js-line-number" data-line-number="2222"></td>
        <td id="LC2222" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isVideoSendEnabled:<span class="pl-pds">&quot;</span></span>, media);</td>
      </tr>
      <tr>
        <td id="L2223" class="blob-num js-line-number" data-line-number="2223"></td>
        <td id="LC2223" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(media <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> media <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2224" class="blob-num js-line-number" data-line-number="2224"></td>
        <td id="LC2224" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2225" class="blob-num js-line-number" data-line-number="2225"></td>
        <td id="LC2225" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L2226" class="blob-num js-line-number" data-line-number="2226"></td>
        <td id="LC2226" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Generic video has precedence</span></td>
      </tr>
      <tr>
        <td id="L2227" class="blob-num js-line-number" data-line-number="2227"></td>
        <td id="LC2227" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">videoSend</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">videoSend</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2228" class="blob-num js-line-number" data-line-number="2228"></td>
        <td id="LC2228" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2229" class="blob-num js-line-number" data-line-number="2229"></td>
        <td id="LC2229" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-smi">media</span>.<span class="pl-smi">videoSend</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L2230" class="blob-num js-line-number" data-line-number="2230"></td>
        <td id="LC2230" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2231" class="blob-num js-line-number" data-line-number="2231"></td>
        <td id="LC2231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2232" class="blob-num js-line-number" data-line-number="2232"></td>
        <td id="LC2232" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isVideoSendRequired</span>(<span class="pl-smi">media</span>) {</td>
      </tr>
      <tr>
        <td id="L2233" class="blob-num js-line-number" data-line-number="2233"></td>
        <td id="LC2233" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isVideoSendRequired:<span class="pl-pds">&quot;</span></span>, media);</td>
      </tr>
      <tr>
        <td id="L2234" class="blob-num js-line-number" data-line-number="2234"></td>
        <td id="LC2234" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(media <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> media <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2235" class="blob-num js-line-number" data-line-number="2235"></td>
        <td id="LC2235" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2236" class="blob-num js-line-number" data-line-number="2236"></td>
        <td id="LC2236" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">videoSend</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L2237" class="blob-num js-line-number" data-line-number="2237"></td>
        <td id="LC2237" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> If we&#39;re not asking to capture video, it&#39;s not required</span></td>
      </tr>
      <tr>
        <td id="L2238" class="blob-num js-line-number" data-line-number="2238"></td>
        <td id="LC2238" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">failIfNoVideo</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">failIfNoVideo</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2239" class="blob-num js-line-number" data-line-number="2239"></td>
        <td id="LC2239" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2240" class="blob-num js-line-number" data-line-number="2240"></td>
        <td id="LC2240" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-smi">media</span>.<span class="pl-smi">failIfNoVideo</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L2241" class="blob-num js-line-number" data-line-number="2241"></td>
        <td id="LC2241" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2242" class="blob-num js-line-number" data-line-number="2242"></td>
        <td id="LC2242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2243" class="blob-num js-line-number" data-line-number="2243"></td>
        <td id="LC2243" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isVideoRecvEnabled</span>(<span class="pl-smi">media</span>) {</td>
      </tr>
      <tr>
        <td id="L2244" class="blob-num js-line-number" data-line-number="2244"></td>
        <td id="LC2244" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isVideoRecvEnabled:<span class="pl-pds">&quot;</span></span>, media);</td>
      </tr>
      <tr>
        <td id="L2245" class="blob-num js-line-number" data-line-number="2245"></td>
        <td id="LC2245" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(media <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> media <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2246" class="blob-num js-line-number" data-line-number="2246"></td>
        <td id="LC2246" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2247" class="blob-num js-line-number" data-line-number="2247"></td>
        <td id="LC2247" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">video</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L2248" class="blob-num js-line-number" data-line-number="2248"></td>
        <td id="LC2248" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Generic video has precedence</span></td>
      </tr>
      <tr>
        <td id="L2249" class="blob-num js-line-number" data-line-number="2249"></td>
        <td id="LC2249" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">media</span>.<span class="pl-smi">videoRecv</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> <span class="pl-smi">media</span>.<span class="pl-smi">videoRecv</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2250" class="blob-num js-line-number" data-line-number="2250"></td>
        <td id="LC2250" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2251" class="blob-num js-line-number" data-line-number="2251"></td>
        <td id="LC2251" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-smi">media</span>.<span class="pl-smi">videoRecv</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L2252" class="blob-num js-line-number" data-line-number="2252"></td>
        <td id="LC2252" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2253" class="blob-num js-line-number" data-line-number="2253"></td>
        <td id="LC2253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2254" class="blob-num js-line-number" data-line-number="2254"></td>
        <td id="LC2254" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isDataEnabled</span>(<span class="pl-smi">media</span>) {</td>
      </tr>
      <tr>
        <td id="L2255" class="blob-num js-line-number" data-line-number="2255"></td>
        <td id="LC2255" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isDataEnabled:<span class="pl-pds">&quot;</span></span>, media);</td>
      </tr>
      <tr>
        <td id="L2256" class="blob-num js-line-number" data-line-number="2256"></td>
        <td id="LC2256" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">adapter</span>.<span class="pl-smi">browserDetails</span>.<span class="pl-smi">browser</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>edge<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L2257" class="blob-num js-line-number" data-line-number="2257"></td>
        <td id="LC2257" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Janus</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Edge doesn&#39;t support data channels yet<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2258" class="blob-num js-line-number" data-line-number="2258"></td>
        <td id="LC2258" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2259" class="blob-num js-line-number" data-line-number="2259"></td>
        <td id="LC2259" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2260" class="blob-num js-line-number" data-line-number="2260"></td>
        <td id="LC2260" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(media <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> media <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2261" class="blob-num js-line-number" data-line-number="2261"></td>
        <td id="LC2261" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;	<span class="pl-c"><span class="pl-c">//</span> Default</span></td>
      </tr>
      <tr>
        <td id="L2262" class="blob-num js-line-number" data-line-number="2262"></td>
        <td id="LC2262" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (<span class="pl-smi">media</span>.<span class="pl-c1">data</span> <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L2263" class="blob-num js-line-number" data-line-number="2263"></td>
        <td id="LC2263" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2264" class="blob-num js-line-number" data-line-number="2264"></td>
        <td id="LC2264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2265" class="blob-num js-line-number" data-line-number="2265"></td>
        <td id="LC2265" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">isTrickleEnabled</span>(<span class="pl-smi">trickle</span>) {</td>
      </tr>
      <tr>
        <td id="L2266" class="blob-num js-line-number" data-line-number="2266"></td>
        <td id="LC2266" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Janus</span>.<span class="pl-en">debug</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>isTrickleEnabled:<span class="pl-pds">&quot;</span></span>, trickle);</td>
      </tr>
      <tr>
        <td id="L2267" class="blob-num js-line-number" data-line-number="2267"></td>
        <td id="LC2267" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(trickle <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> trickle <span class="pl-k">===</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L2268" class="blob-num js-line-number" data-line-number="2268"></td>
        <td id="LC2268" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;	<span class="pl-c"><span class="pl-c">//</span> Default is true</span></td>
      </tr>
      <tr>
        <td id="L2269" class="blob-num js-line-number" data-line-number="2269"></td>
        <td id="LC2269" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> (trickle <span class="pl-k">===</span> <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L2270" class="blob-num js-line-number" data-line-number="2270"></td>
        <td id="LC2270" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2271" class="blob-num js-line-number" data-line-number="2271"></td>
        <td id="LC2271" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.12814s from github-fe157-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-8e19569aacd39e737a14c8515582825f3c90d1794c0e5539f9b525b8eb8b5a8e.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-506169cb2fe76254b921e8c944dd406e5cab2d719e657eace8ada98486231472.js"></script>
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-9eb47fbca833220b58d3823342bfbf6da21f0b430c0dbbd7327f9e34353badc5.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

