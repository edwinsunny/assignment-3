import MotionHoc from './MotionHoc'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth, db, logout } from '../firebase'
import { query, collection, getDocs, where } from 'firebase/firestore'
import axios from 'axios'

const HomeComponent = () => {
  const [News, setNews] = useState()

  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const NewAPI = () => {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: {safeSearch: 'Off', textFormat: 'Raw'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'b5b814646emshcb5b1315114d238p17aa82jsn702ff437127a',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data["value"][0]["name"])
      setNews(response.data["value"][0]["name"])
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/Login')
    fetchUserName();
    NewAPI();
  }, [user, loading])

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      setName(data.name)
    } catch (err) {
      console.error(err)
      alert('An error occured while fetching user data')
    }
  }

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <h4>Logged in as</h4>
        <h1>Name: {name}</h1>
        <h3>Email: {user?.email}</h3>
      </div>
      <div className='dashboard__container'>
        <h5>Latest News</h5>
        <h3>{News}</h3>
      </div>
    </div>
  )
}

const Home = MotionHoc(HomeComponent)

export default Home
