import React from "react";

export default function() {
  return (
    <article class="markdown-body entry-content p-5" itemprop="text">
      <h1>
        <a
          id="user-content-learn-docker"
          class="anchor"
          aria-hidden="true"
          href="#learn-docker"
        >
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        Learn Docker
      </h1>
      <p>
        This document outlines how to learn Docker. If you are completely
        unfamiliar with Docker, please consult the following resources. Don't
        expect to understand the Docker concept immediately. Especially if you
        have little or no DevOps experience.
      </p>
      <ul>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Docker_(software)"
            rel="nofollow"
          >
            Wikipedia
          </a>
        </li>
        <li>
          <a href="https://www.docker.com/why-docker" rel="nofollow">
            Why Docker
          </a>
        </li>
      </ul>
      <p>
        <strong>
          In short, Docker solves the following head aches common in software
          development and deployment.
        </strong>
      </p>
      <ul>
        <li>
          <p>
            Onboard faster and stop wasting hours trying to set up development
            environments, spin up new instances and make copies of production
            code to run locally.
          </p>
        </li>
        <li>
          <p>
            Enable polyglot development and use any language, stack or tools
            without worry of application conflicts.
          </p>
        </li>
        <li>
          <p>
            Eliminate environment inconsistencies and the "works on my machine"
            problem by packaging the application, configs and dependencies into
            an isolated container.
          </p>
        </li>
      </ul>
      <h2>
        <a
          id="user-content-steps"
          class="anchor"
          aria-hidden="true"
          href="#steps"
        >
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        Steps
      </h2>
      <h3>
        <a
          id="user-content-setup"
          class="anchor"
          aria-hidden="true"
          href="#setup"
        >
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        Setup
      </h3>
      <p>
        Docker runs as an engine on your local computer which powers Docker
        Images. An Image contains all the information to represent a complete,
        standalone computer.
      </p>
      <p>
        Follow the below link to register and account with Docker and install
        and setup Docker on your computer.
      </p>
      <ul>
        <li>
          <a href="https://www.docker.com/get-started" rel="nofollow">
            Get Started with Docker
          </a>
        </li>
      </ul>
      <h3>
        <a
          id="user-content-familiarize-yourself-with-docker"
          class="anchor"
          aria-hidden="true"
          href="#familiarize-yourself-with-docker"
        >
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        Familiarize yourself with Docker
      </h3>
      <p>
        Get down and dirty with the first steps of Docker by following the guide
        below.
      </p>
      <ul>
        <li>
          <a href="https://docs.docker.com/get-started/" rel="nofollow">
            Get Started, Part 1: Orientation and setup
          </a>
        </li>
        <li>
          <a href="https://docs.docker.com/get-started/part2/" rel="nofollow">
            Get Started, Part 2: Containers
          </a>
        </li>
      </ul>
      <h3>
        <a
          id="user-content-run-your-own-application-in-docker"
          class="anchor"
          aria-hidden="true"
          href="#run-your-own-application-in-docker"
        >
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        Run your own application in Docker
      </h3>
      <p>
        Examples are all good and well, but nother beats the hands on experience
        of having run your own application in Docker.
      </p>
      <ul>
        <li>
          <p>
            Pick a simple application you have created yourself. If your
            application have external dependencies like a database it is a
            little more work to get it working. If you are unfamiliar with
            networking it is better to pick a project without external
            dependencies.
          </p>
        </li>
        <li>
          <p>
            Find a suitable base image from{" "}
            <a href="https://www.docker.com/products/docker-hub" rel="nofollow">
              Docker Hub
            </a>
            .
          </p>
        </li>
        <li>
          <p>
            Create a <code>Dockerfile</code> to setup your image.
          </p>
        </li>
        <li>
          <p>
            Iterate on your <code>Dockerfile</code> until your application can
            run on your local computer.
          </p>
        </li>
      </ul>
    </article>
  );
}
