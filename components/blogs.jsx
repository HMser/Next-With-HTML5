    {siteBlogs.map((post) => (
     <Link key={post.id} href={`/blogs/${post.slug}`}>
        <a>
            <motion.div variants={fadeIn} key={post.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <Image width={600} height={350} className="h-48 w-full object-cover" src={urlBuilder(post.image[0].url)} alt={post.title} />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                </div>
                <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <span className="sr-only">{post.author.name}</span>
                    <Image width={50} height={50} className="h-10 w-10 rounded-full" src={urlBuilder(post.author.photo[0].url)} alt={post.title} />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.published}>{post.published}</time>
                    </div>
                </div>
                </div>
            </div>
            </motion.div>
        </a>
     </Link>
    ))}
