Feature: Demo Feature
    Feature Description
    
    @demo
    Scenario Outline: First demo scenario
        Given Google page is launched
        When Search a <searchItem>
        Then Click on first search result
        And Url should match <ExpectedUrl>



        Examples:
            | TestID | searchItem | ExpectedUrl           |
            | TC01   | wdio       | https://webdriver.io/ |