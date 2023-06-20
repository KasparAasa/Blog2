import {Layout} from '@/components/Layout'
import {useFormik} from 'formik'
import {useState} from 'react'
import {BlogPostInterface} from '@/interfaces/BlogPost'

const validate = (values: any) => { // function validate(values: any) {}
  const errors: any = {}
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length > 20) {
    errors.title = 'Must be 20 characters or less'
  }

  if (!values.content) {
    errors.content = 'Required'
  }
}


export default function AddPost() {

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      id: '',
      slug: '',
      date: '',
    },
    validate,
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
        {formik.errors.title ? <div>{formik.errors.title}</div> : null}

        <label htmlFor={'content'}>Content</label>
        <input
          id={'content'}
          name={'content'}
          type={'text'}
          onChange={formik.handleChange}
          value={formik.values.content}
        />
        {formik.errors.content ? <div>{formik.errors.content}</div> : null}

        <button type={'submit'}>Submit</button>
      </form>
    </Layout>
  )
}