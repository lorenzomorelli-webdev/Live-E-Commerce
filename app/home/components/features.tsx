import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-center my-14">
      <h2 className="pb-5 font-semibold text-3xl">COSA DICONO DI NOI</h2>
      <div className="flex items-center gap-9">
        <button>C</button>
        <div className="bg-grayback p-2">
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900">
                &#8220;Flowbite is just awesome. It contains tons of predesigned components and
                pages starting from login screen to complex dashboard. Perfect choice for your next
                SaaS application&#8221;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <Image
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                <cite className="pe-3 font-medium text-gray-900">Michael Gough</cite>
                <cite className="ps-3 text-sm text-gray-500">CEO at Google</cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <button>A</button>
      </div>
      <div className="bg-darkbrown w-full mt-16 flex gap-8 items-center justify-center p-4">
        <a href="#">B</a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            fill="white"
            viewBox="0 0 50 50">
            <path d="M 16 1.3242188 L 15.5 1.6132812 L 9.5 5.0839844 L 9 5.3730469 L 9 5.9492188 L 9 31.349609 L 9 31.617188 L 9.1347656 31.849609 L 11.134766 35.310547 L 11.267578 35.542969 L 11.5 35.675781 L 33.5 48.386719 L 34 48.675781 L 34.5 48.386719 L 40.5 44.916016 L 41 44.626953 L 41 44.050781 L 41 18.650391 L 41 18.382812 L 40.865234 18.150391 L 38.865234 14.679688 L 38.732422 14.447266 L 38.5 14.314453 L 16.5 1.6132812 L 16 1.3242188 z M 16 2.7695312 L 37.5 15.179688 L 34 17.201172 L 12.501953 4.7910156 L 16 2.7695312 z M 12.003906 5.0800781 L 33.816406 17.673828 L 35.75 21.027344 L 35.75 46.21875 L 34 47.230469 L 12.183594 34.626953 L 10.25 31.283203 L 10.25 6.09375 L 12.003906 5.0800781 z M 14.980469 9.7402344 A 0.250025 0.250025 0 0 0 14.875 9.7734375 L 12.875 10.923828 A 0.250025 0.250025 0 0 0 12.75 11.140625 L 12.75 29.619141 A 0.250025 0.250025 0 0 0 12.783203 29.744141 L 14.783203 33.205078 A 0.250025 0.250025 0 0 0 14.875 33.296875 L 30.875 42.537109 A 0.250025 0.250025 0 0 0 31.125 42.537109 L 33.125 41.376953 A 0.250025 0.250025 0 0 0 33.25 41.160156 L 33.25 22.689453 A 0.250025 0.250025 0 0 0 33.216797 22.564453 L 31.216797 19.105469 A 0.250025 0.250025 0 0 0 31.125 19.013672 L 15.125 9.7734375 A 0.250025 0.250025 0 0 0 14.980469 9.7402344 z M 15 10.279297 L 30.816406 19.414062 L 32.75 22.757812 L 32.75 41.015625 L 31 42.03125 L 15.183594 32.896484 L 13.25 29.552734 L 13.25 11.285156 L 15 10.279297 z M 15.980469 12.630859 A 0.250025 0.250025 0 0 0 15.876953 12.662109 L 14.876953 13.232422 A 0.250025 0.250025 0 0 0 14.75 13.449219 L 14.75 29.619141 A 0.250025 0.250025 0 0 0 14.783203 29.744141 L 15.783203 31.474609 A 0.250025 0.250025 0 0 0 15.875 31.566406 L 29.875 39.646484 A 0.250025 0.250025 0 0 0 30.123047 39.646484 L 31.123047 39.078125 A 0.250025 0.250025 0 0 0 31.25 38.859375 L 31.25 22.689453 A 0.250025 0.250025 0 0 0 31.216797 22.564453 L 30.216797 20.833984 A 0.250025 0.250025 0 0 0 30.125 20.744141 L 16.125 12.664062 A 0.250025 0.250025 0 0 0 15.980469 12.630859 z M 16 13.167969 L 29.816406 21.142578 L 30.75 22.757812 L 30.75 38.714844 L 30 39.142578 L 16.183594 31.166016 L 15.25 29.552734 L 15.25 13.595703 L 16 13.167969 z M 37.908203 15.521484 L 39.658203 18.558594 L 36.091797 20.619141 L 34.341797 17.582031 L 37.908203 15.521484 z M 39.75 19.083984 L 39.75 43.90625 L 36.25 45.929688 L 36.25 21.103516 L 39.75 19.083984 z M 20.980469 21.285156 A 0.250025 0.250025 0 0 0 20.875 21.320312 L 18.875 22.474609 A 0.250025 0.250025 0 0 0 18.75 22.691406 L 18.75 27.310547 A 0.250025 0.250025 0 0 0 18.783203 27.435547 L 20.783203 30.898438 A 0.250025 0.250025 0 0 0 20.875 30.990234 L 24.875 33.298828 A 0.250025 0.250025 0 0 0 25.125 33.298828 L 27.125 32.144531 A 0.250025 0.250025 0 0 0 27.25 31.927734 L 27.25 27.308594 A 0.250025 0.250025 0 0 0 27.216797 27.183594 L 25.216797 23.720703 A 0.250025 0.250025 0 0 0 25.125 23.628906 L 21.125 21.320312 A 0.250025 0.250025 0 0 0 21.005859 21.285156 A 0.250025 0.250025 0 0 0 20.980469 21.285156 z M 26.980469 21.285156 A 0.250025 0.250025 0 0 0 26.75 21.535156 L 26.75 23.845703 A 0.250025 0.250025 0 0 0 26.875 24.060547 L 28.875 25.216797 A 0.250025 0.250025 0 0 0 29.25 25 L 29.25 22.691406 A 0.250025 0.250025 0 0 0 29.125 22.474609 L 27.125 21.320312 A 0.250025 0.250025 0 0 0 27.005859 21.285156 A 0.250025 0.250025 0 0 0 26.980469 21.285156 z M 21 21.824219 L 24.816406 24.027344 L 26.75 27.376953 L 26.75 31.783203 L 25 32.794922 L 21.183594 30.591797 L 19.25 27.242188 L 19.25 22.835938 L 21 21.824219 z M 27.25 21.96875 L 28.75 22.835938 L 28.75 24.566406 L 27.25 23.701172 L 27.25 21.96875 z M 21.980469 24.173828 A 0.250025 0.250025 0 0 0 21.875 24.207031 L 20.875 24.783203 A 0.250025 0.250025 0 0 0 20.75 25 L 20.75 27.308594 A 0.250025 0.250025 0 0 0 20.783203 27.433594 L 21.783203 29.164062 A 0.250025 0.250025 0 0 0 21.875 29.255859 L 23.875 30.412109 A 0.250025 0.250025 0 0 0 24.125 30.412109 L 25.125 29.833984 A 0.250025 0.250025 0 0 0 25.25 29.617188 L 25.25 27.308594 A 0.250025 0.250025 0 0 0 25.216797 27.183594 L 24.216797 25.451172 A 0.250025 0.250025 0 0 0 24.125 25.361328 L 22.125 24.207031 A 0.250025 0.250025 0 0 0 21.980469 24.173828 z M 22 24.710938 L 23.816406 25.759766 L 24.75 27.376953 L 24.75 29.472656 L 24 29.90625 L 22.183594 28.857422 L 21.25 27.240234 L 21.25 25.144531 L 22 24.710938 z"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            fill="white"
            viewBox="0 0 50 50">
            <path d="M 13.919922 1.3710938 L 13.5 1.6132812 L 9.5 3.9238281 L 9 4.2128906 L 9 4.7890625 L 9 15.179688 L 9 15.755859 L 9.4980469 16.044922 L 10 16.335938 L 9.5019531 16.623047 L 9 16.910156 L 9 17.490234 L 9 27.890625 L 9 28.388672 L 9.3964844 28.6875 L 19.396484 36.238281 L 19.927734 36.638672 L 20.501953 36.304688 L 21 36.015625 L 21 36.949219 L 21 37.447266 L 21.396484 37.748047 L 35.396484 48.318359 L 35.925781 48.716797 L 36.5 48.386719 L 40.5 46.076172 L 41 45.787109 L 41 45.210938 L 41 30.199219 L 41 29.623047 L 40.501953 29.335938 L 40 29.044922 L 40.498047 28.757812 L 41 28.46875 L 41 27.890625 L 41 12.880859 L 41 12.203125 L 40.371094 11.951172 L 26.371094 6.3515625 L 25.921875 6.171875 L 25.501953 6.4140625 L 25 6.7011719 L 25 6.4804688 L 25 5.8027344 L 24.371094 5.5527344 L 14.371094 1.5527344 L 13.919922 1.3710938 z M 14.019531 2.7578125 L 23.429688 6.5195312 L 19.980469 8.5097656 L 10.570312 4.75 L 14.019531 2.7578125 z M 10.25 5.1582031 L 19.75 8.9550781 L 19.748047 20.529297 L 12.146484 16.136719 A 0.250025 0.250025 0 0 0 12.125 16.123047 L 10.25 15.035156 L 10.25 5.1582031 z M 23.75 6.9140625 L 23.75 8.2851562 L 21.875 9.3691406 A 0.250025 0.250025 0 0 0 21.75 9.5859375 L 21.746094 19.660156 L 20.248047 20.529297 L 20.25 8.9296875 L 23.75 6.9140625 z M 26.019531 7.5566406 L 39.429688 12.919922 L 35.980469 14.908203 L 22.572266 9.5449219 L 24.103516 8.6582031 A 0.250025 0.250025 0 0 0 24.125 8.6464844 L 26.019531 7.5566406 z M 22.25 9.9550781 L 35.75 15.355469 L 35.75 29.763672 L 22.246094 21.970703 L 22.25 9.9550781 z M 39.75 13.3125 L 39.75 27.746094 L 37.875 28.824219 A 0.250025 0.250025 0 0 0 37.853516 28.837891 L 36.25 29.763672 L 36.25 15.330078 L 39.75 13.3125 z M 12 16.628906 L 19.873047 21.177734 A 0.250025 0.250025 0 0 0 20.123047 21.177734 L 21.746094 20.238281 L 21.746094 21.970703 L 19.998047 22.982422 L 10.5 17.490234 L 12 16.628906 z M 10.25 17.923828 L 19.748047 23.416016 L 19.75 34.939453 L 10.25 27.765625 L 10.25 17.923828 z M 21.996094 22.404297 L 23.498047 23.271484 L 21.871094 24.207031 A 0.250025 0.250025 0 0 0 21.746094 24.423828 L 21.75 34.136719 L 20.25 35.005859 L 20.248047 23.416016 L 21.996094 22.404297 z M 23.998047 23.560547 L 35.875 30.412109 A 0.250025 0.250025 0 0 0 36.125 30.412109 L 38 29.328125 L 39.501953 30.199219 L 36 32.216797 L 22.496094 24.423828 L 23.998047 23.560547 z M 22.246094 24.857422 L 35.75 32.650391 L 35.75 47.019531 L 22.25 36.826172 L 22.25 34.279297 L 22.246094 24.857422 z M 39.75 30.632812 L 39.75 45.066406 L 36.25 47.085938 L 36.25 32.650391 L 39.75 30.632812 z"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            fill="white"
            viewBox="0 0 50 50">
            <path d="M 16 1.3242188 L 15.5 1.6132812 L 9.5 5.0839844 L 9 5.3730469 L 9 5.9492188 L 9 33.660156 L 9 34.236328 L 9.5 34.525391 L 33.5 48.386719 L 34 48.675781 L 34.5 48.386719 L 40.5 44.916016 L 41 44.626953 L 41 44.050781 L 41 16.339844 L 41 15.763672 L 40.5 15.474609 L 16.5 1.6132812 L 16 1.3242188 z M 16 2.7695312 L 39.5 16.339844 L 34 19.515625 L 10.5 5.9492188 L 16 2.7695312 z M 10.25 6.3828125 L 33.75 19.949219 L 33.75 47.085938 L 10.25 33.515625 L 10.25 6.3828125 z M 14.980469 13.203125 A 0.250025 0.250025 0 0 0 14.875 13.236328 L 13.875 13.8125 A 0.250025 0.250025 0 0 0 13.75 14.029297 L 13.75 15.185547 A 0.250025 0.250025 0 0 0 13.783203 15.310547 L 14.783203 17.042969 A 0.250025 0.250025 0 0 0 14.875 17.132812 L 15.875 17.710938 A 0.250025 0.250025 0 0 0 16.125 17.710938 L 17.125 17.132812 A 0.250025 0.250025 0 0 0 17.25 16.917969 L 17.25 15.761719 A 0.250025 0.250025 0 0 0 17.216797 15.636719 L 16.216797 13.904297 A 0.250025 0.250025 0 0 0 16.125 13.8125 L 15.125 13.236328 A 0.250025 0.250025 0 0 0 14.980469 13.203125 z M 15 13.742188 L 15.816406 14.212891 L 16.75 15.828125 L 16.75 16.773438 L 16 17.205078 L 15.183594 16.734375 L 14.25 15.117188 L 14.25 14.173828 L 15 13.742188 z M 39.75 16.773438 L 39.75 43.90625 L 34.25 47.085938 L 34.25 19.949219 L 39.75 16.773438 z M 13.980469 18.398438 A 0.250025 0.250025 0 0 0 13.75 18.648438 L 13.75 31.351562 A 0.250025 0.250025 0 0 0 13.875 31.568359 L 16.875 33.298828 A 0.250025 0.250025 0 0 0 17.25 33.082031 L 17.25 20.380859 A 0.250025 0.250025 0 0 0 17.125 20.164062 L 14.125 18.431641 A 0.250025 0.250025 0 0 0 14.005859 18.398438 A 0.250025 0.250025 0 0 0 13.980469 18.398438 z M 14.25 19.082031 L 16.75 20.525391 L 16.75 32.650391 L 14.25 31.207031 L 14.25 19.082031 z M 18.980469 21.285156 A 0.250025 0.250025 0 0 0 18.75 21.535156 L 18.75 34.238281 A 0.250025 0.250025 0 0 0 18.875 34.455078 L 21.875 36.185547 A 0.250025 0.250025 0 0 0 22.25 35.970703 L 22.25 28.03125 L 23 27.597656 L 25.816406 29.224609 L 26.75 30.839844 L 26.75 38.855469 A 0.250025 0.250025 0 0 0 26.875 39.072266 L 29.875 40.804688 A 0.250025 0.250025 0 0 0 30.25 40.587891 L 30.25 30.195312 A 0.250025 0.250025 0 0 0 30.216797 30.070312 L 28.216797 26.607422 A 0.250025 0.250025 0 0 0 28.125 26.515625 L 24.125 24.207031 A 0.250025 0.250025 0 0 0 23.875 24.207031 L 22.25 25.144531 L 22.25 23.267578 A 0.250025 0.250025 0 0 0 22.125 23.050781 L 19.125 21.320312 A 0.250025 0.250025 0 0 0 19.005859 21.285156 A 0.250025 0.250025 0 0 0 18.980469 21.285156 z M 19.25 21.96875 L 21.75 23.412109 L 21.75 25.576172 A 0.250025 0.250025 0 0 0 22.125 25.792969 L 24 24.710938 L 27.816406 26.916016 L 29.75 30.263672 L 29.75 40.154297 L 27.25 38.710938 L 27.25 30.773438 A 0.250025 0.250025 0 0 0 27.216797 30.648438 L 26.216797 28.916016 A 0.250025 0.250025 0 0 0 26.125 28.824219 L 23.125 27.091797 A 0.250025 0.250025 0 0 0 22.875 27.091797 L 21.875 27.669922 A 0.250025 0.250025 0 0 0 21.75 27.886719 L 21.75 35.537109 L 19.25 34.09375 L 19.25 21.96875 z"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            fill="white"
            viewBox="0 0 50 50">
            <path d="M 16 1.3242188 L 15.5 1.6132812 L 9.5 5.0839844 L 9 5.3730469 L 9 5.9492188 L 9 33.660156 L 9 34.236328 L 9.5 34.525391 L 33.5 48.386719 L 34 48.675781 L 34.5 48.386719 L 40.5 44.916016 L 41 44.626953 L 41 44.050781 L 41 16.339844 L 41 15.763672 L 40.5 15.474609 L 16.5 1.6132812 L 16 1.3242188 z M 16 2.7714844 L 39.5 16.339844 L 34 19.515625 L 10.501953 5.9453125 L 16 2.7714844 z M 10.25 6.3789062 L 33.75 19.949219 L 33.751953 47.082031 L 26.25 42.751953 L 26.25 34.09375 L 28.875 35.609375 A 0.250025 0.250025 0 0 0 29.242188 35.451172 L 30.242188 31.410156 A 0.250025 0.250025 0 0 0 30.125 31.134766 L 26.25 28.896484 L 26.25 24.855469 L 29.875 26.949219 A 0.250025 0.250025 0 0 0 30.25 26.732422 L 30.25 22.113281 A 0.250025 0.250025 0 0 0 30.125 21.896484 L 25.125 19.009766 A 0.250025 0.250025 0 0 0 24.980469 18.976562 A 0.250025 0.250025 0 0 0 24.875 19.009766 L 21.875 20.742188 A 0.250025 0.250025 0 0 0 21.75 20.958984 L 21.75 26.298828 L 19.125 24.783203 A 0.250025 0.250025 0 0 0 18.75 25 L 18.75 29.619141 A 0.250025 0.250025 0 0 0 18.875 29.835938 L 21.75 31.496094 L 21.75 40.154297 L 10.25 33.515625 L 10.25 6.3789062 z M 39.75 16.773438 L 39.751953 43.908203 L 34.251953 47.082031 L 34.25 19.949219 L 39.75 16.773438 z M 25 19.515625 L 29.75 22.257812 L 29.75 26.298828 L 26.125 24.207031 A 0.250025 0.250025 0 0 0 25.75 24.423828 L 25.75 29.041016 A 0.250025 0.250025 0 0 0 25.875 29.257812 L 29.712891 31.472656 L 28.837891 35.009766 L 26.125 33.443359 A 0.250025 0.250025 0 0 0 25.75 33.660156 L 25.75 42.462891 L 22.25 40.443359 L 22.25 31.351562 A 0.250025 0.250025 0 0 0 22.125 31.134766 L 19.25 29.474609 L 19.25 25.433594 L 21.875 26.949219 A 0.250025 0.250025 0 0 0 22.25 26.732422 L 22.25 21.103516 L 25 19.515625 z"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            fill="white"
            viewBox="0 0 50 50">
            <path d="M 16 1.3242188 L 15.5 1.6132812 L 9.5 5.0839844 L 9 5.3730469 L 9 5.9492188 L 9 31.349609 L 9 31.617188 L 9.1347656 31.849609 L 11.134766 35.310547 L 11.267578 35.542969 L 11.5 35.675781 L 33.5 48.386719 L 34 48.675781 L 34.5 48.386719 L 40.5 44.916016 L 41 44.626953 L 41 44.050781 L 41 18.650391 L 41 18.382812 L 40.865234 18.150391 L 38.865234 14.679688 L 38.732422 14.447266 L 38.5 14.314453 L 16.5 1.6132812 L 16 1.3242188 z M 16 2.7695312 L 37.5 15.179688 L 34 17.201172 L 12.501953 4.7910156 L 16 2.7695312 z M 12.003906 5.0800781 L 33.816406 17.673828 L 35.75 21.027344 L 35.75 46.21875 L 34 47.230469 L 12.183594 34.626953 L 10.25 31.283203 L 10.25 6.09375 L 12.003906 5.0800781 z M 14.980469 9.7402344 A 0.250025 0.250025 0 0 0 14.875 9.7734375 L 12.875 10.923828 A 0.250025 0.250025 0 0 0 12.75 11.140625 L 12.75 29.619141 A 0.250025 0.250025 0 0 0 12.783203 29.744141 L 14.783203 33.205078 A 0.250025 0.250025 0 0 0 14.875 33.296875 L 30.875 42.537109 A 0.250025 0.250025 0 0 0 31.125 42.537109 L 33.125 41.376953 A 0.250025 0.250025 0 0 0 33.25 41.160156 L 33.25 22.689453 A 0.250025 0.250025 0 0 0 33.216797 22.564453 L 31.216797 19.105469 A 0.250025 0.250025 0 0 0 31.125 19.013672 L 15.125 9.7734375 A 0.250025 0.250025 0 0 0 14.980469 9.7402344 z M 15 10.279297 L 30.816406 19.414062 L 32.75 22.757812 L 32.75 41.015625 L 31 42.03125 L 15.183594 32.896484 L 13.25 29.552734 L 13.25 11.285156 L 15 10.279297 z M 15.980469 12.630859 A 0.250025 0.250025 0 0 0 15.876953 12.662109 L 14.876953 13.232422 A 0.250025 0.250025 0 0 0 14.75 13.449219 L 14.75 29.619141 A 0.250025 0.250025 0 0 0 14.783203 29.744141 L 15.783203 31.474609 A 0.250025 0.250025 0 0 0 15.875 31.566406 L 29.875 39.646484 A 0.250025 0.250025 0 0 0 30.123047 39.646484 L 31.123047 39.078125 A 0.250025 0.250025 0 0 0 31.25 38.859375 L 31.25 22.689453 A 0.250025 0.250025 0 0 0 31.216797 22.564453 L 30.216797 20.833984 A 0.250025 0.250025 0 0 0 30.125 20.744141 L 16.125 12.664062 A 0.250025 0.250025 0 0 0 15.980469 12.630859 z M 16 13.167969 L 29.816406 21.142578 L 30.75 22.757812 L 30.75 38.714844 L 30 39.142578 L 16.183594 31.166016 L 15.25 29.552734 L 15.25 13.595703 L 16 13.167969 z M 37.908203 15.521484 L 39.658203 18.558594 L 36.091797 20.619141 L 34.341797 17.582031 L 37.908203 15.521484 z M 39.75 19.083984 L 39.75 43.90625 L 36.25 45.929688 L 36.25 21.103516 L 39.75 19.083984 z M 20.980469 21.285156 A 0.250025 0.250025 0 0 0 20.875 21.320312 L 18.875 22.474609 A 0.250025 0.250025 0 0 0 18.75 22.691406 L 18.75 27.310547 A 0.250025 0.250025 0 0 0 18.783203 27.435547 L 20.783203 30.898438 A 0.250025 0.250025 0 0 0 20.875 30.990234 L 24.875 33.298828 A 0.250025 0.250025 0 0 0 25.125 33.298828 L 27.125 32.144531 A 0.250025 0.250025 0 0 0 27.25 31.927734 L 27.25 27.308594 A 0.250025 0.250025 0 0 0 27.216797 27.183594 L 25.216797 23.720703 A 0.250025 0.250025 0 0 0 25.125 23.628906 L 21.125 21.320312 A 0.250025 0.250025 0 0 0 21.005859 21.285156 A 0.250025 0.250025 0 0 0 20.980469 21.285156 z M 26.980469 21.285156 A 0.250025 0.250025 0 0 0 26.75 21.535156 L 26.75 23.845703 A 0.250025 0.250025 0 0 0 26.875 24.060547 L 28.875 25.216797 A 0.250025 0.250025 0 0 0 29.25 25 L 29.25 22.691406 A 0.250025 0.250025 0 0 0 29.125 22.474609 L 27.125 21.320312 A 0.250025 0.250025 0 0 0 27.005859 21.285156 A 0.250025 0.250025 0 0 0 26.980469 21.285156 z M 21 21.824219 L 24.816406 24.027344 L 26.75 27.376953 L 26.75 31.783203 L 25 32.794922 L 21.183594 30.591797 L 19.25 27.242188 L 19.25 22.835938 L 21 21.824219 z M 27.25 21.96875 L 28.75 22.835938 L 28.75 24.566406 L 27.25 23.701172 L 27.25 21.96875 z M 21.980469 24.173828 A 0.250025 0.250025 0 0 0 21.875 24.207031 L 20.875 24.783203 A 0.250025 0.250025 0 0 0 20.75 25 L 20.75 27.308594 A 0.250025 0.250025 0 0 0 20.783203 27.433594 L 21.783203 29.164062 A 0.250025 0.250025 0 0 0 21.875 29.255859 L 23.875 30.412109 A 0.250025 0.250025 0 0 0 24.125 30.412109 L 25.125 29.833984 A 0.250025 0.250025 0 0 0 25.25 29.617188 L 25.25 27.308594 A 0.250025 0.250025 0 0 0 25.216797 27.183594 L 24.216797 25.451172 A 0.250025 0.250025 0 0 0 24.125 25.361328 L 22.125 24.207031 A 0.250025 0.250025 0 0 0 21.980469 24.173828 z M 22 24.710938 L 23.816406 25.759766 L 24.75 27.376953 L 24.75 29.472656 L 24 29.90625 L 22.183594 28.857422 L 21.25 27.240234 L 21.25 25.144531 L 22 24.710938 z"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            fill="white"
            viewBox="0 0 50 50">
            <path d="M 13.919922 1.3710938 L 13.5 1.6132812 L 9.5 3.9238281 L 9 4.2128906 L 9 4.7890625 L 9 15.179688 L 9 15.755859 L 9.4980469 16.044922 L 10 16.335938 L 9.5019531 16.623047 L 9 16.910156 L 9 17.490234 L 9 27.890625 L 9 28.388672 L 9.3964844 28.6875 L 19.396484 36.238281 L 19.927734 36.638672 L 20.501953 36.304688 L 21 36.015625 L 21 36.949219 L 21 37.447266 L 21.396484 37.748047 L 35.396484 48.318359 L 35.925781 48.716797 L 36.5 48.386719 L 40.5 46.076172 L 41 45.787109 L 41 45.210938 L 41 30.199219 L 41 29.623047 L 40.501953 29.335938 L 40 29.044922 L 40.498047 28.757812 L 41 28.46875 L 41 27.890625 L 41 12.880859 L 41 12.203125 L 40.371094 11.951172 L 26.371094 6.3515625 L 25.921875 6.171875 L 25.501953 6.4140625 L 25 6.7011719 L 25 6.4804688 L 25 5.8027344 L 24.371094 5.5527344 L 14.371094 1.5527344 L 13.919922 1.3710938 z M 14.019531 2.7578125 L 23.429688 6.5195312 L 19.980469 8.5097656 L 10.570312 4.75 L 14.019531 2.7578125 z M 10.25 5.1582031 L 19.75 8.9550781 L 19.748047 20.529297 L 12.146484 16.136719 A 0.250025 0.250025 0 0 0 12.125 16.123047 L 10.25 15.035156 L 10.25 5.1582031 z M 23.75 6.9140625 L 23.75 8.2851562 L 21.875 9.3691406 A 0.250025 0.250025 0 0 0 21.75 9.5859375 L 21.746094 19.660156 L 20.248047 20.529297 L 20.25 8.9296875 L 23.75 6.9140625 z M 26.019531 7.5566406 L 39.429688 12.919922 L 35.980469 14.908203 L 22.572266 9.5449219 L 24.103516 8.6582031 A 0.250025 0.250025 0 0 0 24.125 8.6464844 L 26.019531 7.5566406 z M 22.25 9.9550781 L 35.75 15.355469 L 35.75 29.763672 L 22.246094 21.970703 L 22.25 9.9550781 z M 39.75 13.3125 L 39.75 27.746094 L 37.875 28.824219 A 0.250025 0.250025 0 0 0 37.853516 28.837891 L 36.25 29.763672 L 36.25 15.330078 L 39.75 13.3125 z M 12 16.628906 L 19.873047 21.177734 A 0.250025 0.250025 0 0 0 20.123047 21.177734 L 21.746094 20.238281 L 21.746094 21.970703 L 19.998047 22.982422 L 10.5 17.490234 L 12 16.628906 z M 10.25 17.923828 L 19.748047 23.416016 L 19.75 34.939453 L 10.25 27.765625 L 10.25 17.923828 z M 21.996094 22.404297 L 23.498047 23.271484 L 21.871094 24.207031 A 0.250025 0.250025 0 0 0 21.746094 24.423828 L 21.75 34.136719 L 20.25 35.005859 L 20.248047 23.416016 L 21.996094 22.404297 z M 23.998047 23.560547 L 35.875 30.412109 A 0.250025 0.250025 0 0 0 36.125 30.412109 L 38 29.328125 L 39.501953 30.199219 L 36 32.216797 L 22.496094 24.423828 L 23.998047 23.560547 z M 22.246094 24.857422 L 35.75 32.650391 L 35.75 47.019531 L 22.25 36.826172 L 22.25 34.279297 L 22.246094 24.857422 z M 39.75 30.632812 L 39.75 45.066406 L 36.25 47.085938 L 36.25 32.650391 L 39.75 30.632812 z"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            fill="white"
            viewBox="0 0 50 50">
            <path d="M 16 1.3242188 L 15.5 1.6132812 L 9.5 5.0839844 L 9 5.3730469 L 9 5.9492188 L 9 33.660156 L 9 34.236328 L 9.5 34.525391 L 33.5 48.386719 L 34 48.675781 L 34.5 48.386719 L 40.5 44.916016 L 41 44.626953 L 41 44.050781 L 41 16.339844 L 41 15.763672 L 40.5 15.474609 L 16.5 1.6132812 L 16 1.3242188 z M 16 2.7695312 L 39.5 16.339844 L 34 19.515625 L 10.5 5.9492188 L 16 2.7695312 z M 10.25 6.3828125 L 33.75 19.949219 L 33.75 47.085938 L 10.25 33.515625 L 10.25 6.3828125 z M 14.980469 13.203125 A 0.250025 0.250025 0 0 0 14.875 13.236328 L 13.875 13.8125 A 0.250025 0.250025 0 0 0 13.75 14.029297 L 13.75 15.185547 A 0.250025 0.250025 0 0 0 13.783203 15.310547 L 14.783203 17.042969 A 0.250025 0.250025 0 0 0 14.875 17.132812 L 15.875 17.710938 A 0.250025 0.250025 0 0 0 16.125 17.710938 L 17.125 17.132812 A 0.250025 0.250025 0 0 0 17.25 16.917969 L 17.25 15.761719 A 0.250025 0.250025 0 0 0 17.216797 15.636719 L 16.216797 13.904297 A 0.250025 0.250025 0 0 0 16.125 13.8125 L 15.125 13.236328 A 0.250025 0.250025 0 0 0 14.980469 13.203125 z M 15 13.742188 L 15.816406 14.212891 L 16.75 15.828125 L 16.75 16.773438 L 16 17.205078 L 15.183594 16.734375 L 14.25 15.117188 L 14.25 14.173828 L 15 13.742188 z M 39.75 16.773438 L 39.75 43.90625 L 34.25 47.085938 L 34.25 19.949219 L 39.75 16.773438 z M 13.980469 18.398438 A 0.250025 0.250025 0 0 0 13.75 18.648438 L 13.75 31.351562 A 0.250025 0.250025 0 0 0 13.875 31.568359 L 16.875 33.298828 A 0.250025 0.250025 0 0 0 17.25 33.082031 L 17.25 20.380859 A 0.250025 0.250025 0 0 0 17.125 20.164062 L 14.125 18.431641 A 0.250025 0.250025 0 0 0 14.005859 18.398438 A 0.250025 0.250025 0 0 0 13.980469 18.398438 z M 14.25 19.082031 L 16.75 20.525391 L 16.75 32.650391 L 14.25 31.207031 L 14.25 19.082031 z M 18.980469 21.285156 A 0.250025 0.250025 0 0 0 18.75 21.535156 L 18.75 34.238281 A 0.250025 0.250025 0 0 0 18.875 34.455078 L 21.875 36.185547 A 0.250025 0.250025 0 0 0 22.25 35.970703 L 22.25 28.03125 L 23 27.597656 L 25.816406 29.224609 L 26.75 30.839844 L 26.75 38.855469 A 0.250025 0.250025 0 0 0 26.875 39.072266 L 29.875 40.804688 A 0.250025 0.250025 0 0 0 30.25 40.587891 L 30.25 30.195312 A 0.250025 0.250025 0 0 0 30.216797 30.070312 L 28.216797 26.607422 A 0.250025 0.250025 0 0 0 28.125 26.515625 L 24.125 24.207031 A 0.250025 0.250025 0 0 0 23.875 24.207031 L 22.25 25.144531 L 22.25 23.267578 A 0.250025 0.250025 0 0 0 22.125 23.050781 L 19.125 21.320312 A 0.250025 0.250025 0 0 0 19.005859 21.285156 A 0.250025 0.250025 0 0 0 18.980469 21.285156 z M 19.25 21.96875 L 21.75 23.412109 L 21.75 25.576172 A 0.250025 0.250025 0 0 0 22.125 25.792969 L 24 24.710938 L 27.816406 26.916016 L 29.75 30.263672 L 29.75 40.154297 L 27.25 38.710938 L 27.25 30.773438 A 0.250025 0.250025 0 0 0 27.216797 30.648438 L 26.216797 28.916016 A 0.250025 0.250025 0 0 0 26.125 28.824219 L 23.125 27.091797 A 0.250025 0.250025 0 0 0 22.875 27.091797 L 21.875 27.669922 A 0.250025 0.250025 0 0 0 21.75 27.886719 L 21.75 35.537109 L 19.25 34.09375 L 19.25 21.96875 z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
