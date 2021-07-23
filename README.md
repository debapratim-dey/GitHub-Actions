# GitHub-Actions

##Introduction:
* Was launched in November-2019
* It helps you automate tasks within your software life cycle.
* Runs a specific sequence of steps on a particular event.
* Enables you to integrate CI/CD into your repository. 
* Whatever Azure Pipelines, Circle-CI, Gitlab CI/CD & Jenkins can do, GitHub-Actions can do as well.

##Some basic terminologies:
* <ins>Workflow:</ins> A Workflow is an automated process that is made up of one or multiple jobs and can be triggered by an event.
* <ins>Jobs:</ins> A job is made up of multiple steps and runs in an instance of the virtual environment. Jobs can run independently of each other or sequentially.
* <ins>Steps:</ins> A step is a set of tasks that can be executed by a job. 
* <ins>Event:</ins> Events are specific activities that trigger a workflow run. For example, when someone pushes new code to the repo.
* <ins>Runner:</ins> A runner is a machine with the Github Actions runner application installed. Then runner waits for available jobs it can then execute.

##Common queries:
* https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners
* https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace