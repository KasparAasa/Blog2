import {Layout} from '@/components/Layout'
import {useFormik} from 'formik'
import {useState} from 'react'
import {BlogPostInterface} from '@/interfaces/BlogPost'
import * as Yup from 'yup'

// const validate = (values: any) => { // function validate(values: any) {}
//   const errors: any = {}
//   if (!values.title) {
//     errors.title = 'Required'
//   } else if (values.title.length > 20) {
//     errors.title = 'Must be 20 characters or less'
//   }
//
//   if (!values.content) {
//     errors.content = 'Required'
//   }
// }


export default function AddPost() {

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      id: '',
      slug: '',
      date: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      content: Yup.string()
        .required('Required'),
    }),
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
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title ? <div>{formik.errors.title}</div> : null}

        <label htmlFor={'content'}>Content</label>
        <input
          id={'content'}
          name={'content'}
          type={'text'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.content}
        />
        {formik.errors.content && formik.touched.content ? <div>{formik.errors.content}</div> : null}

        <button type={'submit'}>Submit</button>
      </form>
    </Layout>
  )
}