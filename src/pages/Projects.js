import React from 'react';
import ButtonsButtom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Project from '../components/Project';

export const Project1 = () =>{
  return(
    <main>
      <div className="project">
        <Navigation/>
        <Logo/>
        <Project projectNumber={0}/> 
         
        <ButtonsButtom left={'/'} right={'/project-2'}/>
      </div>
    </main>
  )
}

export const Project2 = () =>{
  return(
    <main>
      <div className="project">
        <Navigation/>
        <Logo/>
        <Project projectNumber={1}/> 
        <ButtonsButtom left={'/project-1'} right={'/project-3'}/>
      </div>
    </main>
  )
}

export const Project3 = () =>{
  return(
    <main>
      <div className="project" >
        <Navigation/>
        <Logo/>
        <Project projectNumber={2}/> 
        <ButtonsButtom left={'/project-2'} right={'/project-4'}/>
      </div>
    </main>
  )
}

export const Project4 = () =>{
  return(
    <main>
      <div className="project">
        <Navigation/>
        <Logo/>
        <Project projectNumber={3}/> 
        <ButtonsButtom left={'/project-3'} right={'/contact'}/>
      </div>
    </main>
  )
}