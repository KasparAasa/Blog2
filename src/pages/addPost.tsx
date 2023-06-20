import {Layout} from '@/components/Layout'
import {useFormik} from 'formik'
import {useState} from 'react'
import {BlogPostInterface} from '@/interfaces/BlogPost'

export default function AddPost() {

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      id: '',
      slug: '',
      date: '',
    },
    onSubmit: values => {
      setBlogPosts({
        title: values.title,
        content: values.content,
        id: '',
        slug: '',
        date: '',
      })
    },
  })

  const [blogPosts, setBlogPosts] =
    useState<BlogPostInterface>({
      title: '',
      content: '',
      id: '',
      slug: '',
      date: '',
    })

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor={'title'}>Title</label>
        <input
          id={'title'}
          name={'title'}
          type={'text'}
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor={'content'}>Content</label>
        <input
          id={'content'}
          name={'content'}
          type={'text'}
          onChange={formik.handleChange}
          value={formik.values.content}
        />

        <button type={'submit'}>Submit</button>
      </form>
    </Layout>
  )
}